import sanitizeHtml from 'sanitize-html';
import { ERRORS_MAP } from '../variables';

export const urlRegExp = /(http(s)?:\/\/)?(\S+\.[^/\s]+)+\S*/i;
export const emailRegExp = /^[^@\s]+@[^@\s]{1,}\.[^@\s]{2,}$/i;
export const phoneRegExp = /[+\d.\-()\s]+/i;

export function formatePhone(phone) {
    if(!phone) {
    	return '';
    }
    phone = phone.replace(/\D+/gi, '');
    if( /^380/.test(phone) || /^375/.test(phone) ) {
        phone = '+' + phone.slice(0,-9) + ' (' + phone.slice(-9,-7) + ') ' + phone.slice(-7,-4) + '-' +phone.slice(-4,-2) + '-' + phone.slice(-2);
    } else {
        phone = '+' + phone.slice(0,-10) + ' (' + phone.slice(-10,-7) + ') ' + phone.slice(-7,-4) + '-' +phone.slice(-4,-2) + '-' + phone.slice(-2);
    }
    return phone;
}

export function getUserName(value) {
    if( !value ) {
        return '';
    }
    let newValue = value.replace(/\s*/g, '');
    if( newValue.length ) {
        const cleanValue = newValue.match(/([^/]*)$/g);
        if( cleanValue && cleanValue.length ) {
            newValue = cleanValue[0];
            newValue = newValue.replace(/\?.*/gi, '');
        } else {
            newValue = '';
        }
    } else {
        newValue = '';
    }
    return newValue;
}

export function getYouTubeChannel(value) {
    if( !value ) {
        return '';
    }
    let newValue = value.replace(/\s*/g, '');
    if( newValue.length  ) {
        const cleanValue = newValue.match(/\/?(channel|c|user)\/(\S*)$/g);
        if( cleanValue && cleanValue.length ) {
            newValue = cleanValue[0];
            newValue = newValue.replace(/\?.*/gi, '');
        } else {
            newValue = '';
        }
        
    } else {
        newValue = '';
    }
    return newValue;
}

export function formateTime(time) {
    return time.toString().length > 1 ? time.toString() : '0' + time.toString();
}

export function formateUrl(value) {
    if( !value ) {
        return '';
    }
    value = value.replace(/\s*/g, '');
    if( !value.length ) {
        return '';
    }
    if( !/^http(s)?:\/\//.test(value) ) {
        value = `https://${value}`;
    }
    return value;
}

export function getDate(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${ formateTime(hours) }:${formateTime(minutes)}`;
}

export function convertDataFromServer(data) {
    let {fields, userpic = ''} = data;
    fields = JSON.parse(fields);
    fields.hashtags = [];
    if(fields.hashtag1) {
        fields.hashtags.push(fields.hashtag1);
    }
    if(fields.hashtag2) {
        fields.hashtags.push(fields.hashtag2);
    }
    if(fields.hashtag3) {
        fields.hashtags.push(fields.hashtag3);
    }
    fields.userpic = userpic ? `data:image/png;base64, ${userpic}` : '';
    return fields;
}

export function convertDataToServer(data) {
    const fields = Object.assign({}, data);
    const userpic = fields.userpic;
    const result = {};

    fields.hashtag1 = fields.hashtags[0] || '';
    fields.hashtag2 = fields.hashtags[1] || '';
    fields.hashtag3 = fields.hashtags[2] || '';
    delete fields.hashtags;
    delete fields.userpic;

    result.userpic = userpic;
    result.fields = fields;

    return result;
}

export const getBlobFromBase64 = async (data) => {
    const result = await fetch(data);
    const blob = await result.blob();
    return blob;
}

export const sanitizeData = (data) => {
    if (typeof data === 'string') {
        data = sanitizeHtml(data);
        // Дмитрий просил вернуть в url`ах &
        data = data.replace(/&amp;/g, '&');
    } else if (typeof data === 'object') {
        for (let key in data) {
            const value = data[key];
            data[key] = sanitizeData(value)
        };
    }
    // TODO  добавить рекурсивную проверку для других типов
    return data;
};

export const decodeErrors = (errors) => {
    for(let key in errors) {
        const code = errors[key];
        errors[key] = ERRORS_MAP[code];
    }
    return errors;
}
