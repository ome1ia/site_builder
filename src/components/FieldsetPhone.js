import { useRef, useState } from 'react';
import { useField, useFormikContext } from 'formik';

export default function FieldsetPhone(props) {

    const { relatedFields } = props;
    const [ field, form, meta ] = useField(props.name);
    const { setFieldValue } = useFormikContext();
    let { name, value } = field;
    value = value || '';
    const { error } = form;
    const { setValue } = meta;

    const inputRef = useRef(null);
    const [ focused, setFocused ] = useState(null);

    const handleFocus = () => {
        setFocused(true);
    }

    const handleBlur = () => {
        setFocused(false);
    }

    const handleChange = (evt) => {
        let value = evt.target.value;
        value = value.replace(/[() \-.]/gi, '');
        if ( value.length === 11 && /^8/.test(value) ) {
            value = value.replace(/^8/, '+7');
        }
        if (!value.length) {
            switchOffRelatedFields();
        }
        setValue(value, true);
    }

    const emptyField = () => {
        setValue('');
        switchOffRelatedFields();
        inputRef.current.focus();
    }

    const switchOffRelatedFields = () => {
        relatedFields.map(fieldName => {
            setFieldValue(fieldName, '');
            return false;
        });
    }

    return (
        <div className="editor-form__section">
            <div className="editor-form__header">
                { props.label }
                &nbsp;<a href={ props.helpLink } className="text-grey" title={`Как заполнить "${props.label}"?`} target="_blank" rel="noreferrer"><i className="fas fa-info-circle"></i></a>
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col-sm-4">
                        <label htmlFor="phone" className="editor-form__label">Телефон</label>
                    </div>
                    <div className="col-sm-8">
                        <div className="input__wrapper">
                            <input 
                                type="tel"
                                ref={ inputRef }
                                name={ name }
                                value={ value }
                                className="form-control"
                                placeholder={ props.label }
                                onChange={ handleChange }
                                onFocus={ handleFocus }
                                onBlur={ handleBlur }
                            />
                            { value && (
                                <div className="input__times" title="Очистить" onClick={ emptyField }>
                                    <i className="fas fa-times"></i>
                                </div>
                            )}
                        </div>
                        { error &&  (
                            <div className="text-error">{ error }</div>
                        )}
                        {
                            focused && (
                                <div>
                                    <small>
                                        Пример заполнения:<br />
                                        Россия:   +71234567890<br />
                                        Украина:  +380123456789<br />
                                        Беларусь: +375123456789
                                    </small>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            { props.children }
        </div>
    );
}
