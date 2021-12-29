import { createContext, useContext } from 'react';

export const VcardContext = createContext();

export const useVcard = () => {
    return useContext(VcardContext);
}
