import { useState } from 'react';

export function usePersistedState(defaultValue){


    const getDefaultValue=()=>{
        const persistedValue = window.localStorage.getItem('persistedstate');
        return persistedValue ? JSON.parse(persistedValue) : defaultValue;
    }

    const [value,setValue] = useState(getDefaultValue());

    const persistValue=(value)=>{
        setValue(value);
        window.localStorage.setItem('persistedstate',JSON.stringify(value))
    }

    return [value,persistValue];
}