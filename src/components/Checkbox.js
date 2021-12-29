import { useField } from 'formik';

export default function Checkbox(props) {
    const [ field, , helpers ] = useField(props.name);
    const { setValue } = helpers;
    const { name, value } = field;
    const cls = ['checkbox-toggler'];
    cls.push(props.fieldClasses);

    const handleChange = () => {
        let newValue;
        if(value) {
            newValue = '';
        } else {
            newValue = 'on'
        }
        setValue(newValue);
    }

    return (
        <div className={ cls.join(' ') }>
            <input type="checkbox" {...field} id={ name } defaultChecked={ !!value }  onChange={ handleChange } />
            <label htmlFor={ name } className={ !value ? 'checkbox-toggler__label_off' : 'checkbox-toggler__label_on' }></label>
        </div>
    );
}
