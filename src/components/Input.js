import { useRef } from "react";
import { useField } from 'formik';

export default function Input(props) {
    const [ field, form, helpers ] = useField(props.name);
    const { error } = form;
    const { setValue } = helpers;

    const inputRef = useRef(null);

    const emptyField = () => {
        setValue('');
        inputRef.current.focus();
    }

    return (
        <div className="form-group">
            <div className="row">
                <div className={`col-sm-4${ props.hiddenLabel ? ' hidden-xs hidden-sm' : '' }`}>
                    <label htmlFor={ field.name } className="editor-form__label">
                        { props.label }
                        { props.children }
                    </label>
                </div>
                <div className="col-sm-8">
                    <div className="input__wrapper">
                        <input 
                            {...field}
                            type="text" 
                            ref={ inputRef }
                            className="form-control"
                            id={ field.name }
                            placeholder={ props.placeholder } />
                        { field.value && (
                            <div className="input__times" title="Очистить" onClick={ emptyField }>
                                <i className="fas fa-times"></i>
                            </div>
                        )}
                    </div>
                    { error && (
                        <div className="text-error">{ error }</div>
                    )}
                </div>
            </div>
        </div>
    );
}
