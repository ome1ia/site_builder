import { useField } from 'formik';

export default function Textarea(props) {
    const [ field, form ] = useField(props.name);
    const { error } = form;

    return (
        <div className="form-group">
            <div className="row">
                <div className="col-sm-4">
                    <label htmlFor="{ field.name }" className="editor-form__label">
                        { props.label }
                        { props.children }
                    </label>
                </div>
                <div className="col-sm-8">
                    <textarea {...field} {...props} className="form-control" cols="30" rows="5">{ field.value }</textarea>
                    { error &&  (
                        <div className="text-error">{ error }</div>
                    )}
                </div>
            </div>
        </div>
    );
}
