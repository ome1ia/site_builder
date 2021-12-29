import { useState, createContext } from 'react';

export const LoaderContext = createContext();

export function LoaderProvider({ children }) {
    const [ loading, setLoading ] = useState( false );

    const addLoader = () => setLoading(true);
    const removeLoader = () => setLoading(false);

    return (
        <LoaderContext.Provider value={{
            loading, addLoader, removeLoader
        }}>
            { children }
        </LoaderContext.Provider>
    )
}