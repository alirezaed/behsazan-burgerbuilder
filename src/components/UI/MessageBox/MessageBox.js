import React from 'react';
import classes from './MessageBox.module.css';

function MessageBox(props){


    if (!props.message_type)
        return null;
        
    return <div className={[classes.message, classes[props.message_type]].join(' ')}>
        {props.message}
    </div>
}

export default MessageBox;