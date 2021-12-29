import { urlRegExp, emailRegExp, phoneRegExp, getUserName, getYouTubeChannel } from '../utils/utils';

const validate = (values) => {
    const errors = {};
    
    if ( !values.user_name ) {
        errors.user_name = 'Обязательное поле';
    } else if ( values.user_name.length < 2 ) {
        errors.user_name = 'Имя пользователя слишком короткое';
    } else if ( values.user_name.length > 40 ) {
        errors.user_name = 'Слишком длинное поле, сократите';
    }
    
    if ( values.title && values.title.length > 200 ) {
        errors.title = 'Слишком длинное поле, сократите';
    }

    if ( values.description && values.description.length > 500 ) {
        errors.description = 'Слишком длинное поле, сократите';
    }

    if ( values.hashtag && values.hashtag.length > 100 ) {
        errors.hashtag = 'Слишком длинное поле, сократите';
    }

    if ( values.website_url && !urlRegExp.test(values.website_url) ) {
        errors.website_url = 'Неправильный url-адрес. Пример: https://webnames.ru';
    }

    if( values.show_links ) {
        if ( values.link1_url && !urlRegExp.test(values.link1_url) ) {
            errors.link1_url = 'Неправильный url-адрес. Пример: https://webnames.ru';
        }
    
        if ( values.link1_name && values.link1_name.length > 300 ) {
            errors.link1_name = 'Слишком длинное поле, сократите';
        }
    
        if ( values.link2_url && !urlRegExp.test(values.link2_url) ) {
            errors.link2_url = 'Неправильный url-адрес. Пример: https://webnames.ru';
        }
    
        if ( values.link2_name && values.link2_name.length > 300 ) {
            errors.link2_name = 'Слишком длинное поле, сократите';
        }
    }

    if (values.show_social) {
        if ( values.instagram_url ) {
            if ( values.instagram_url.length < 3 ) {
                errors.instagram_url = 'Неверно заполнено имя пользователя. Пример: https://www.instagram.com/webnames_rus/ или webnames_rus';
            }
            if ( !getUserName( values.instagram_url.replace(/(\/)?$/, '') ) ) {
                errors.instagram_url = 'Неверно заполнено имя пользователя. Пример: https://www.instagram.com/webnames_rus/ или webnames_rus';
            }
        }

        if ( values.facebook_url ) {
            if ( values.facebook_url.length < 3 ) {
                errors.facebook_url = 'Неверно заполнено имя пользователя. Пример: https://www.facebook.com/Webnamesru или Webnamesru';
            }
            if ( !getUserName(values.facebook_url) ) {
                errors.facebook_url = 'Неверно заполнено имя пользователя. Пример: https://www.facebook.com/Webnamesru или Webnamesru';
            }
        }

        if ( values.tiktok_url ) {
            if (values.tiktok_url.length < 3) {
                errors.tiktok_url = 'Неверно заполнено имя пользователя. Пример: https://www.tiktok.com/@webnames_rus или @webnames_rus';
            }
            if ( !getUserName(values.tiktok_url) ) {
                errors.tiktok_url = 'Неверно заполнено имя пользователя. Пример: https://www.tiktok.com/@webnames_rus или @webnames_rus';
            }
        }

        if ( values.youtube_url ) {
            if (values.youtube_url.length < 3) {
                errors.youtube_url = 'Неверно заполнено название канала. Пример: https://www.youtube.com/channel/UCD-Hw6TI_LD9QdMkHKcGXAg или channel/UCD-Hw6TI_LD9QdMkHKcGXAg';
            }
            if ( !getYouTubeChannel(values.youtube_url) ) {
                errors.youtube_url = 'Неверно заполнено название канала. Пример: https://www.youtube.com/channel/UCD-Hw6TI_LD9QdMkHKcGXAg или channel/UCD-Hw6TI_LD9QdMkHKcGXAg';
            }
        }

        if ( values.vk_url ) {
            if (values.vk_url.length < 3) {
                errors.vk_url = 'Неверно заполнено имя пользователя. Пример: https://vk.com/webnamesru или webnamesru';
            }
            if ( !getUserName(values.vk_url) ) {
                errors.vk_url = 'Неверно заполнено имя пользователя. Пример: https://vk.com/webnamesru или webnamesru';
            }
        }

        if ( values.tg_username ) {
            if ( values.tg_username.length < 3 ) {
                errors.tg_username = 'Неверно заполнено имя пользователя';
            }
            if (values.tg_username.length > 45) {
                errors.tg_username = 'Неверно заполнено имя пользователя';
            }
            if ( !getUserName(values.tg_username) ) {
                errors.tg_username = 'Неверно заполнено имя пользователя';
            }
        }

        if ( values.twitter_username ) {
            if ( values.twitter_username < 3 ) {
                errors.tg_username = 'Неверно заполнено имя пользователя. Пример: https://twitter.com/webnamesru или webnamesru';
            }
            if ( !getUserName(values.twitter_username) ) {
                errors.tg_username = 'Неверно заполнено имя пользователя. Пример: https://twitter.com/webnamesru или webnamesru';
            }
        }

        if ( values.odnoklassniki_username ) {
            if ( values.odnoklassniki_username < 3 ) {
                errors.tg_username = 'Неверно заполнено имя пользователя. Пример: https://ok.ru/profile/11111111 или 11111111';
            }
            if ( !getUserName(values.odnoklassniki_username) ) {
                errors.tg_username = 'Неверно заполнено имя пользователя. Пример: https://ok.ru/profile/11111111 или 11111111';
            }
        }
    }

    if ( values.email && !emailRegExp.test(values.email) ) {
        errors.email = 'Неверно заполнен e-mail';
    }

    if ( values.phone && !phoneRegExp.test(values.phone) ) {
        errors.phone = 'В поле телефон должны быть указаны только цифры и символы + - ()';
    }

    return errors;
}

export default validate;
