import React from 'react';
import classes from './Header.module.css';
import Tabs from './Tabs/Tabs';
import Logo from './Logo/Logo';
import AccountBottons from './AccountBottons/AccountBottons';


function Header(props){
    return <div className={classes.container}>
        <AccountBottons />
        <Logo />
        <Tabs />
    </div>
}

export default Header;