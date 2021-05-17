import axios from '../../tools/fetch';
import React, { useContext, useEffect } from 'react';
import Header from './Header/Header';
import classes from './Layout.module.css';
import {AuthenticationContext } from '../../context/AuthenticationContext';

function Layout(props){

    const authContext = useContext(AuthenticationContext);

    useEffect(()=>{
        const token = window.localStorage.getItem('token');
        axios.post('/User/IsTokenValid',{token})
            .then(result=>{
                if (result.status){
                    authContext.login(token);
                }
            })
    },[]);


    return <div className={classes.container}>
        <Header />
        <div className={classes.mainbody}>
            {props.children}
        </div>
    </div>
}

export default Layout;