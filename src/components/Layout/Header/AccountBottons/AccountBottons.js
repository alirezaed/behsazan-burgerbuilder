import React from 'react';
import classes from './AccountBottons.module.css';
import TabLink  from '../../../../components/UI/TabLink/TabLink';

function AccountButtons(){
    return <div className={classes.container}>
        <TabLink to="/Login" >Login</TabLink>
        <TabLink to="/Signup" >Signup</TabLink>
    </div>
}

export default AccountButtons;