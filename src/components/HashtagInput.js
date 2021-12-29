import { useRef } from "react";
import { useField, useFormikContext } from 'formik';
import { sanitizeData } from '../core/utils/utils';

export default function HashtagInput(props) {
    const [ field, form, helpers ] = useField(props.name);
    const { touched, error } = form;
    const { setValue } = helpers;

    const { setFieldValue, values } = useFormikContext();

    const inputRef = useRef(null);

    const hashtags = values.hashtags && values.hashtags.length ? [ ...values.hashtags ] : [];
    const handleRemoveHashtag = (id) => {
        const changedHashtags = [...values.hashtags];
        changedHashtags.splice(id, 1);
        setFieldValue('hashtags', changedHashtags);
    }

    const handleAddHashtag = (evt) => {
        evt.preventDefault();

        if( error ) {
            return;
        }
        if( !field.value ) {
            return;
        }

        let newHashtag = field.value.replace(/[\s#]+/gi, '');
        newHashtag = sanitizeData( newHashtag );
        const changedHashtags = [...values.hashtags];

        changedHashtags.unshift(newHashtag);
        if( changedHashtags.length > 3 ) {
            changedHashtags.length = 3;
        }
        setFieldValue('hashtags', changedHashtags);
        setFieldValue('hashtag', '');
    }

    const handleEnterHashtag = (evt) => {
        if( evt.code && evt.code === 'Enter' ) {
            handleAddHashtag(evt);
        }
    }

    const emptyField = () => {
        setValue('');
        inputRef.current.focus();
    }

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
                    <div className="input-group">
                        <div className="input__wrapper">
                            <input 
                                { ...field }
                                type="text"
                                ref={ inputRef }
                                className="form-control"
                                onKeyUp={ handleEnterHashtag } />
                            { field.value && (
                                <div className="input__times" title="Очистить" onClick={ emptyField }>
                                    <i className="fas fa-times"></i>
                                </div>
                            )}
                        </div>
                        <span className="input-group-btn">
                            <button className="btn btn-text-primary" type="button" onClick={ handleAddHashtag }><i className="fas fa-plus"></i></button>
                        </span>
                    </div>
                    { touched && error &&  (
                        <div className="text-error">{ error }</div>
                    )}
                    <div className="js-tagWrapper">
                        {
                            hashtags.map( (hashtag, id) => (
                                <span 
                                    key={ id }
                                    className="js-tagRemove profile__tag profile__tag_editor"
                                    title="Удалить"
                                    onClick={()=>handleRemoveHashtag(id)}>{ hashtag }</span>
                                ) 
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
