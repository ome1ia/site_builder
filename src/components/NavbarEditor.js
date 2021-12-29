import { useContext, Fragment, useEffect } from 'react';
import { useVcard } from '../core/context/Vcard/VcardContext';
import { useFormikContext } from 'formik';
import { AlertContext } from '../core/context/Alert/AlertContext';
import { useHistory } from 'react-router-dom';
import { VIEW_PATH } from '../core/variables';

export default function NavbarEditor(props) {
    const { dirty: formChanged, errors, submitForm, setErrors } = useFormikContext();
    const { saveVcard, showVcard, vcardErrors } = useVcard();
    let locationHistory = useHistory();

    const { addDataErrorsAlert } = useContext(AlertContext);
   
    const handleSaveChanges = async (evt) => {
        evt.preventDefault();
        if( props.unsaved || formChanged ) {
            if( Object.keys(errors).length ) {
                addDataErrorsAlert();
                setErrors(errors);
            } else {
                const data = await submitForm();
                const result = await saveVcard(data);
                if(result) {
                    locationHistory.push(VIEW_PATH);
                }
            }
        }
    };

    const handleShowChanges = async (evt) => {
        evt.preventDefault();
        if( Object.keys(errors).length ) {
            addDataErrorsAlert();
            setErrors(errors);
        } else {
            if(formChanged) {
                props.setUnsaved(true);
                const data = await submitForm();
                showVcard(data);
            }

            locationHistory.push(VIEW_PATH);
        }
    };

    // отлавливаем ошибки с сервера после сабмита
    useEffect( () => {
        if( Object.keys(vcardErrors) && Object.keys(vcardErrors).length ) {
            setErrors(vcardErrors);
        }
    }, [ vcardErrors ]);

    return (
        <Fragment>
            <div className="sidebar__btn-group">
                <div className="container">
                    <a href={`${ VIEW_PATH }`} onClick={ handleSaveChanges } className={`sidebar__btn sidebar__btn-hidden${ props.unsaved || formChanged ? ' active' : '' }`} title="Сохранить">
                        <i className="fas fa-save"></i>
                    </a>
                    {
                        props.accountUrl && (
                            <a href={ props.accountUrl } className="sidebar__btn sidebar__btn-hidden" title="Мои домены и услуги">
                                <i className="fas fa-user"></i>
                            </a>
                        )
                    }
                    <a href={`${ VIEW_PATH }`} onClick={ handleShowChanges } className="sidebar__btn sidebar__btn-hidden" title="Просмотр">
                        <i className="fas fa-eye"></i>
                    </a>
                </div>
            </div>
        </Fragment>
    )
}
