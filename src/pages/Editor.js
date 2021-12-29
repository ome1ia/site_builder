import { useVcard } from '../core/context/Vcard/VcardContext';
import VcardEditForm from '../core/forms/VcardEditForm';

function Editor(props) {  
    const { 
        vcardFields,
        vcardErrors,
        defaultUserpic,
        resetVcard,
        saveVcard,
        showVcard,
        isUnsaved,
        setUnsaved,
        isNotEdited
    } = useVcard();

    const accountUrl = props.accountUrl;

    if ( !Object.keys(vcardFields) || !Object.keys(vcardFields).length ) {
        return null;
    } else {
        // сбросим значения, если форма ни разу не редактировалась
        const values = Object.assign({}, vcardFields);

        if(isNotEdited) {
            values.user_name = '';
            values.title = '';
        }

        return (
            <div className="sidebar in">
                <VcardEditForm
                    values={ values }
                    errors={ vcardErrors }
                    defaultUserpic={ defaultUserpic }
                    reset={ resetVcard }
                    save={ saveVcard }
                    show={ showVcard }
                    accountUrl={ accountUrl }
                    unsaved={ isUnsaved }
                    setUnsaved={ setUnsaved }
                    showBanner={ true }
                />
            </div>
        );
    }
}

export default Editor;