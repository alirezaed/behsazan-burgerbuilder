import {useAxios} from '../../hooks/useAxios';
import React, { useContext, useEffect } from 'react';
import Header from './Header/Header';
import classes from './Layout.module.css';
import {AuthenticationContext } from '../../context/AuthenticationContext';
import Loading from '../../components/UI/Loading/Loading';
import MessageBoxModal from '../../components/UI/MessageBoxModal/MessageBoxModal';
import Toast from '../../components/UI/Toast/Toast';
import { useSelector } from 'react-redux';

function Layout(props){

    const authContext = useContext(AuthenticationContext);
    const {post} = useAxios();
    const loading = useSelector(store=>store.loading);
    
    useEffect(()=>{
        const token = window.localStorage.getItem('token');
        post('/User/IsTokenValid',{token})
            .then(result=>{
                if (result.status){
                    authContext.login(token);
                }
            })
    },[]);


    return <div className={classes.container}>
        {loading && <Loading />}
        <MessageBoxModal />
        <Toast />
        <Header />
        <div className={classes.mainbody}>
            {props.children}
        </div>
    </div>
}

export default Layout;