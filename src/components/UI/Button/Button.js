import classes from './Button.module.css';
import React, { useContext } from 'react';
import {ApplicationContext} from '../../../context/ApplicationContext';

function Button(props){

    const contextData = useContext(ApplicationContext);

    const classNames=[];
    classNames.push(classes.button);
    if (props.disabled){
        classNames.push(classes.disabled);
    }
    if (contextData.theme === 'dark'){
        classNames.push(classes.dark);
    }

    const handleClick=(e)=>{
        e.preventDefault();
        if (props.onClick){
            props.onClick(e);
        }
    }
    
    return <button {...props} onClick={handleClick} className={classNames.join(' ')}>{props.title}</button>
}

export default Button;