import { useRef, Fragment } from "react";
import { useField } from 'formik';

export default function InputGroup(props) {
    const [ field, form, helpers ] = useField(props.name);
    const { error } = form;
    const { setValue } = helpers;

    const inputRef = useRef(null);

    const emptyField = () => {
        setValue('');
        inputRef.current.focus();
    }

    return (
        <Fragment>
            <div className="input__wrapper">
                <div className="input-group">
                    { props.children }
                    <input 
                        {...field}
                        type="text"
                        ref={ inputRef }
                        className="form-control"
                        placeholder={ props.label } />
                </div>
                { field.value && (
                    <div className="input__times" title="Очистить" onClick={ emptyField }>
                        <i className="fas fa-times"></i>
                    </div>
                )}
            </div>
            { error &&  (
                <div className="text-error">{ error }</div>
            )}
        </Fragment>
    );
}
