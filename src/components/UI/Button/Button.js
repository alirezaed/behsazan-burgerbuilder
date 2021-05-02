import classes from './Button.module.css';
import React from 'react';


function Button(props){

    const classNames=[];
    classNames.push(classes.button);
    if (props.disabled){
        classNames.push(classes.disabled);
    }
    return <button  {...props} className={classNames.join(' ')}>{props.title}</button>
}

export default Button;