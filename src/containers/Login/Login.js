
import classes from './Login.module.css';
import React, { useState } from 'react';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import {useInput} from '../../hooks/useInput';
import axios from '../../tools/fetch';

function Login (props){

    const username = useInput('',true);
    const password = useInput('',true);
    
    const handleSubmit=(e)=>{
        e.preventDefault();

        if (username.validate() && password.validate()){
            axios.post('user/login',{
                username:username.value,
                password:password.value
            }).then(result=>{
                if (result.data.status){
                    window.localStorage.setItem('token',result.data.message);
                }
            });
        }

        
    }

    return <form className={classes.form} onSubmit={handleSubmit}>
        <Input required name="username" lable="Username" {...username}  />
        <Input required name="password" lable="Password" {...password} type="password" />
        <Button title="Login" />
    </form>

}

export default Login;