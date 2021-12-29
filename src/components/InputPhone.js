import { useRef, Fragment } from "react";
import { useField } from 'formik';

export default function InputPhone(props) {
    const [ field, form, meta ] = useField(props.name);
    let { name, value } = field;
    value = value || '';
    const { touched, error } = form;
    const { setValue } = meta;

    const inputRef = useRef(null);

    const formattedValue = value.replace(/^\+7/, '');

    const handleChange = (evt) => {
        let value = evt.target.value;
        value = value.replace(/[\(\) \-\.]/gi, '');
        if ( value.length > 10 && /^8/.test(value) ) {
            value = value.replace(/^8/, '');
        }
        setValue(value, true);
    }

    const emptyField = () => {
        setValue('');
        inputRef.current.focus();
    }

    return (
        <Fragment>
            <div class="input__wrapper">
                <div className="input-group">
                    { props.children }
                    <input 
                        type="text"
                        ref={ inputRef }
                        name={ name }
                        value={ formattedValue }
                        className="form-control"
                        placeholder={ props.label }
                        onChange={ handleChange } />
                </div>
                { formattedValue && (
                    <div class="input__times" title="Очистить" onClick={ emptyField }>
                        <i class="fas fa-times"></i>
                    </div>
                )}
            </div>
            { error &&  (
                <div className="text-error">{ error }</div>
            )}
        </Fragment>
    );
}
