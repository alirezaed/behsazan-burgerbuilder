import React, { useEffect } from 'react';

export function useInput(defaultValue,required){
    const [value,setValue] = React.useState(defaultValue);
    const [message,setMessage] = React.useState('');
    const [touched,setTouched] = React.useState(false);

    useEffect(()=>{
        if (touched){
            validate();
        }
    },[value]);

    const validate=()=>{
        if (required && (!value || value.length ===0)){
            setMessage('This field is required!');
            return false;
        }
        setMessage('');
        return true;
    }

    const onChange=(e)=>{
        setTouched(true);
        setValue(e.target.value);
    }

    return {
        value,
        onChange,
        errorMessage:message,
        validate
    }
}

