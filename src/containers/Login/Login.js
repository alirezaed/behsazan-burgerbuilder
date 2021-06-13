import classes from './Login.module.css';
import React from 'react';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import {useInput} from '../../hooks/useInput';

import { useReduxDispatch } from '../../hooks/useReduxDispatch';

function Login (){

    const username = useInput('',true);
    const password = useInput('',true);
    const {login} = useReduxDispatch();
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (username.validate() && password.validate()){
            login(username.value,password.value);
        }
    }

    return <form className={classes.form} >
        <Input required name="username" lable="Username" {...username}  />
        <Input required name="password" lable="Password" {...password} type="password" />
        <Button onClick={handleSubmit} title="Login" />
    </form>

}

export default Login;