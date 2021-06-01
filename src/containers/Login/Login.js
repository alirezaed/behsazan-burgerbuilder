
import classes from './Login.module.css';
import React, { useContext, useState } from 'react';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import {useInput} from '../../hooks/useInput';
import axios from '../../tools/fetch';
import {AuthenticationContext} from '../../context/AuthenticationContext';
import Loading from '../../components/UI/Loading/Loading';
import { usePersistedState } from '../../hooks/usePersistedState';
import { useReduxDispatch } from '../../hooks/useReduxDispatch';

function Login (props){

    const authContext = useContext(AuthenticationContext);

    const [isLoading,setIsLoading] = useState(false);
    const [firstName,setFirstName] = usePersistedState('noname');
    const username = useInput('',true);
    const password = useInput('',true);
    const {showToast} = useReduxDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (username.validate() && password.validate()){
            setIsLoading(true);
            axios.post('user/login',{
                username:username.value,
                password:password.value
            }).then(result=>{
                if (result.data.status){
                    authContext.login(result.data.message);
                    showToast('Success','Wellcome!');
                    props.history.push('/', props.location.state);
                }
                setIsLoading(false);
            }).catch(err=>{
                setIsLoading(false);
            });
        }

        
    }

    return <form className={classes.form} >
        {isLoading && <Loading />}
        {firstName}
        <Input required name="username" lable="Username" {...username}  />
        <Input required name="password" lable="Password" {...password} type="password" />
        <Button onClick={handleSubmit} title="Login" />
    </form>

}

export default Login;