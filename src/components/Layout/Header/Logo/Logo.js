import React from 'react';
import LogoImage from './burgerlogo.png';
import classes from './Logo.module.css';

function Logo (){
    return <img src={LogoImage} className={classes.logo} alt="logo" />
}

export default Logo;