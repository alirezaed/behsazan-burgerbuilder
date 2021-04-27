import React from 'react';
import classes from './TotalAmount.module.css';

function TotalAmount(props){

    return <div className={classes.total}>
        Total Amount is : {props.totalAmount}$
    </div>
}

export default TotalAmount;