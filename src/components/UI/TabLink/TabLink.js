import classes from './TabLink.module.css';
import React from 'react';
import {NavLink} from 'react-router-dom';

function TabLink(props){
    return <NavLink activeClassName={classes.active} exact className={classes.tablink} {...props} >{props.children}</NavLink>
}

export default TabLink;