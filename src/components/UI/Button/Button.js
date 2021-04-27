import classes from './Button.module.css';
import React from 'react';


function Button(props){

    return <button className={classes.button}>{props.title}</button>
}

export default Button;