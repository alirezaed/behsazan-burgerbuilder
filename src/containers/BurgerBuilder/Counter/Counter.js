import React from 'react';
import classes from './Counter.module.css';

function Counter({count,label, onChange}){

    const handleClickAdd = ()=>{
        if (count < 3){
            onChange(label,'add');
        }
    }

    const handleClickRemove = ()=>{
        if (count > 0){
            onChange(label,'remove');
        }
    }

    console.log(label,' rendered');
    return <div className={classes.container}>
        <span className={classes.label} >{label} : </span>
        <button onClick={handleClickAdd}>+</button>
        <span className={classes.count}>{count}</span>
        <button onClick={handleClickRemove}>-</button>
    </div>
}

export default React.memo(Counter);//HOC