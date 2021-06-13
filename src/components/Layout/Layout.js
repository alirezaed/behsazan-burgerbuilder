import {useAxios} from '../../hooks/useAxios';
import React, { useContext, useEffect } from 'react';
import Header from './Header/Header';
import classes from './Layout.module.css';
import Loading from '../../components/UI/Loading/Loading';
import MessageBoxModal from '../../components/UI/MessageBoxModal/MessageBoxModal';
import Toast from '../../components/UI/Toast/Toast';
import { useSelector } from 'react-redux';
import { useReduxDispatch } from '../../hooks/useReduxDispatch';

function Layout(props){

    
    const {post} = useAxios();
    const loading = useSelector(store=>store.loading);
    const { login } = useReduxDispatch();
    
    useEffect(()=>{
        const token = window.localStorage.getItem('token');
        post('/User/IsTokenValid',{token})
            .then(result=>{
                if (result.status){
                    login(token);
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