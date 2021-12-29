import { useState, createContext } from 'react';
import Alert from '../../../components/Alert';

export const AlertContext = createContext();

export function AlertProvider({ logoutUrl, children }) {
    const [ alert, setAlert ] = useState( false );

    const addUpdateFailAlert = () => setAlert('updateFail');
    const addServiseNotFoundAlert = () => setAlert('serviceNotFound');
    const addUserHasNotServiseAlert = () => setAlert('userHasNotServise');
    const addDataErrorsAlert = () => setAlert('dataErrors');
    const addUserpicUploadErrorAlert = () => setAlert('userpicUploadError');
    const addUpdateSuccessAlert = () => setAlert('updateSuccess');
    const removeAlert = () => setAlert('');

    const setLogout = () => {
        const site = window.location.origin;
        const logout = `${site}${logoutUrl}`;
        window.location.assign(logout);
    }

    return (
        <AlertContext.Provider value={{
            addUpdateFailAlert,
            addServiseNotFoundAlert,
            addUserHasNotServiseAlert,
            addDataErrorsAlert,
            addUserpicUploadErrorAlert,
            addUpdateSuccessAlert, 
            removeAlert,
        }}>
            { alert && ( alert === 'updateFail' ) && (
                <Alert onClose={ removeAlert }>
                    <strong>Произошла ошибка при отправке запроса. Попробуйте еще раз.</strong>
                </Alert>)
            }
            { alert && ( alert === 'serviceNotFound' ) && (
                <Alert onClose={ removeAlert }>
                    <strong>Сервис не найден.</strong>
                </Alert>)
            }
            { alert && ( alert === 'userHasNotServise' ) && (
                <Alert onClose={ setLogout }>
                    <strong>Сервис не принадлежит Вам. Продлите его или попробуйте авторизоваться в другом аккаунте на сайте <a href={ logoutUrl } className="link link-underline">webnames.ru</a>.</strong>
                </Alert>)
            }
            { alert && ( alert === 'dataErrors' ) && (
                <Alert onClose={ removeAlert }>
                    <strong>Форма заполнена с ошибками.</strong>
                </Alert>)
            }
            { alert && ( alert === 'userpicUploadError' ) && (
                <Alert onClose={ removeAlert }>
                    <strong>Ошибка сохранения изображения. Данные не обновлены, попробуйте повторить.</strong>
                </Alert>)
            }
            { alert && ( alert === 'updateSuccess' ) && (
                <Alert onClose={ removeAlert } success="true">
                    <strong>Успешно выполнено. Данные на сайте будут обновлены в течение 30 минут.</strong>
                </Alert>)
            }
            { children }
        </AlertContext.Provider>
    )
}
