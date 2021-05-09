import * as React from 'react';
import classes from './Input.module.css';

function Input(props){
    



    return <div className={classes.input}>
        <div>
            {props.lable}
            {props.required && <span className={classes.red}>*</span>}
        </div>
        <input {...props} />
        </div>
}

export default Input;