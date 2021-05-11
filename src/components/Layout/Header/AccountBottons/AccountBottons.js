import React, { useContext } from 'react';
import classes from './AccountBottons.module.css';
import TabLink  from '../../../../components/UI/TabLink/TabLink';
import {AuthenticationContext} from'../../../../context/AuthenticationContext';

function AccountButtons(){

    const authContext = useContext(AuthenticationContext);

    const handleLogout=()=>{
        authContext.logout();
    }

    return <div className={classes.container}>
        {!authContext.isLogin && <TabLink to="/Login" >Login</TabLink>}
        {!authContext.isLogin && <TabLink to="/Signup" >Signup</TabLink>}
        {!!authContext.isLogin && <TabLink to="/dasdasd" onClick={handleLogout} >Logout</TabLink>}
        {!!authContext.isLogin && <TabLink to="/Profile" >Profile</TabLink>}
    </div>
}

export default AccountButtons;