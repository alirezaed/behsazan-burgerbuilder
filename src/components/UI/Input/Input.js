import * as React from 'react';
import classes from './Input.module.css';

function Input(props){
    

    const pureProps={
        ...props
    };
    delete pureProps.reset;
    delete pureProps.errorMessage;
    delete pureProps.validate;


    const ref = React.useRef();

    React.useEffect(()=>{
        ref.current.focus();
    },[]);
    
    return <div className={classes.input}>
        <div>
            {props.lable}
            {props.required && <span className={classes.red}>*</span>}
        </div>
        <input {...pureProps} ref={ref} />
        {props.errorMessage && <div className={classes.red} >{props.errorMessage}</div>}
        </div>
}

export default Input;