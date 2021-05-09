
import React, { useState } from 'react';
import Button from '../../components/UI/Button/Button';
import {useInput} from '../../hooks/useInput';

function Login (props){

    const username = useInput('');
    const password = useInput('');
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(username.value,password.value)
    }

    return <form onSubmit={handleSubmit}>
        Username : <input {...username} />
        Password : <input {...password} type="password" />
        <Button title="Login" />
    </form>

}

export default Login;