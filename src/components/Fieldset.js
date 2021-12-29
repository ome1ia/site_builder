import { useState } from 'react';
import { useField, useFormikContext } from 'formik';

export default function Fieldset(props ) {
    
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    const [disabled, setDisabled] = useState(!field.value);

    const handleChange = () => {
        let newValue;
        if(field.value) {
            newValue = '';
        } else {
            newValue = 'on'
        }
        setFieldValue(field.name, newValue);
        setDisabled(!newValue);
    }

    const helpText = props.helpLink ? ( <span>&nbsp;<a href={ props.helpLink } className="text-grey" title={`Как заполнить "${props.label}"?`} target="_blank" rel="noreferrer"><i className="fas fa-info-circle"></i></a></span> ) : null;

    const cls = ['editor-form__section'];
    if(disabled) {
        cls.push('editor-form__section_disabled');
    }

    return (
        <div className={ cls.join(' ') }>
            <div className="editor-form__header">
                { props.label }
                { helpText }
                <div className="checkbox-toggler checkbox-toggler_right">
                    <input type="checkbox" {...field} id={ field.name } defaultChecked={ field.value }  onChange={ handleChange } />
                    <label htmlFor={ field.name }></label>
                </div>
            </div>
            { props.children }
        </div>
    );
}
