export const VCARD_URL = '/scripts/ajax_lightsite.pl?';
export const USERPIC_URL = '/scripts/ajax_upload_lightsite_userpic.pl?';
export const WITH_UPDATE = '&action=update_vcard_details';
export const WITH_USERPIC = '&with_userpic=1';
export const AUTH_URL = '/scripts/auth.pl?auth=1';
export const ERRORS_MAP = {
    'UNDEFINED_SERVICE': 'Сервис не найден.',
    'UNDEFINED_USER': 'Сервис не находится под управлением пользователя. Возможно, вам нужно авторизоваться.',
    'SERVICE_NOT_FOUND': 'Сервис не активен.',
    'UPLOAD_FAIL': 'Загрузка не выполнена.',
    'MIN_LENGTH': 'Имя пользователя слишком короткое',
    'MAX_LENGTH' : 'Слишком длинное поле, сократите',
    'INVALUD_HOSTNAME' : 'Неправильный url-адрес',
    'INVALID_PHONE' : 'В поле телефон должны быть указаны только цифры и символ "+"',
    'INVALID_NICKNAME' : 'Неверно заполнено имя пользователя',
    'INVALID_EMAIL' : 'Неверно заполнен e-mail',
    'DEF': 'Неверно заполнено поле',
};
export const EDIT_PATH = '/';
export const VIEW_PATH = '/view';