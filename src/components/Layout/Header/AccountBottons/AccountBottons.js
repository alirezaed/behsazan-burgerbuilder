import React, { useContext } from 'react';
import classes from './AccountBottons.module.css';
import TabLink  from '../../../../components/UI/TabLink/TabLink';
import {AuthenticationContext} from'../../../../context/AuthenticationContext';
import {ApplicationContext} from'../../../../context/ApplicationContext';

function AccountButtons(){

    const authContext = useContext(AuthenticationContext);
    const appContext = useContext(ApplicationContext);

    const handleLogout=()=>{
        authContext.logout();
    }

    const handleToggleClick=()=>{
        appContext.toggleTheme();
    }

    const toggleStyle={
        backgroundColor:appContext.theme==='dark'? 'black':'white',
        color:appContext.theme==='dark'? 'white':'black'
    }

    return <div className={classes.container}>
        {!authContext.isLogin && <TabLink to="/Login" >Login</TabLink>}
        {!authContext.isLogin && <TabLink to="/Signup" >Signup</TabLink>}
        {!!authContext.isLogin && <TabLink to="/dasdasd" onClick={handleLogout} >Logout</TabLink>}
        {!!authContext.isLogin && <TabLink to="/Profile" >{authContext.username}</TabLink>}
        <div className={classes.toggleTheme} style={toggleStyle} onClick={handleToggleClick}>
            {appContext.theme}
        </div>
    </div>
}

export default AccountButtons;