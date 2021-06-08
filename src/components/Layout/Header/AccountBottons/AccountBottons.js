import React, { useContext } from 'react';
import classes from './AccountBottons.module.css';
import TabLink  from '../../../../components/UI/TabLink/TabLink';
import {ApplicationContext} from'../../../../context/ApplicationContext';
import { useReduxDispatch } from '../../../../hooks/useReduxDispatch';
import { useSelector } from 'react-redux';

function AccountButtons(){

    const appContext = useContext(ApplicationContext);
    const { logout } = useReduxDispatch();
    const isLogin = useSelector(store=>store.isLogin);
    const username = useSelector(store=>store.username);
    const handleLogout=()=>{
        logout();
    }

    const handleToggleClick=()=>{
        appContext.toggleTheme();
    }

    const toggleStyle={
        backgroundColor:appContext.theme==='dark'? 'black':'white',
        color:appContext.theme==='dark'? 'white':'black'
    }

    return <div className={classes.container}>
        {!isLogin && <TabLink to="/Login" >Login</TabLink>}
        {!isLogin && <TabLink to="/Signup" >Signup</TabLink>}
        {!!isLogin && <TabLink to="/dasdasd" onClick={handleLogout} >Logout</TabLink>}
        {!!isLogin && <TabLink to="/Profile" >{username}</TabLink>}
        <div className={classes.toggleTheme} style={toggleStyle} onClick={handleToggleClick}>
            {appContext.theme}
        </div>
    </div>
}

export default AccountButtons;