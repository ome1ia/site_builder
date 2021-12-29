import React, { useState, useContext, useEffect } from 'react';
import { VcardContext } from './VcardContext';
import { sanitizeData } from '../../utils/utils';
import { LoaderContext } from '../Loader/LoaderContext';
import { AlertContext } from '../Alert/AlertContext';
import { vcardDemoData } from '../../../mock/vcardDemoData';

export function VcardDemoProvider({ children, defaultUserpic }) {
    const { addLoader, removeLoader } = useContext(LoaderContext);
    const { addUpdateSuccessAlert } = useContext(AlertContext);
    const [ vcardFields, setVcardFields ] = useState({});
    const [ fromMirRus, setFromMirRus ] = useState(true);
    const [ vcardErrors, setVcardErrors ] = useState({});
    const [ isNotEdited, setNotEdited ] = useState('');
    const [ isUnsaved, setUnsaved ] = useState(false);

    // покажем данные
    useEffect(() => {
        addLoader();
        setVcardFields(vcardDemoData);
        removeLoader();
    }, []);

    const saveVcard = async (data) => {
        addLoader();
        setVcardErrors({});
        const cleanData = await sanitizeData(data);
        cleanData.userpic = cleanData.userpic || vcardFields.userpic;
        setVcardFields(data);
        removeLoader();
        addUpdateSuccessAlert();
        setUnsaved(false);
        return true;
    };

    const showVcard = async (data) => {
        addLoader();
        const cleanData = await sanitizeData(data);
        setVcardFields(cleanData);
        setVcardErrors({});
        removeLoader();
        if(isNotEdited) {
            setNotEdited('');
        }
        return true;
    };
   
    return (
        <VcardContext.Provider value={{
            vcardFields, fromMirRus, vcardErrors, defaultUserpic, saveVcard, showVcard, isUnsaved, setUnsaved, isNotEdited
        }}>
            { children }
        </VcardContext.Provider>
    )
}
