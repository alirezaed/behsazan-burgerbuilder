import React from 'react';
import { useReduxDispatch } from '../../../hooks/useReduxDispatch';
import classes from './Counter.module.css';

function Counter({count,label}){

    const {addDetail,removeDetail} = useReduxDispatch();

    const handleClickAdd = ()=>{
        if (count < 3){
            addDetail(label.toLowerCase());
        }
    }

    const handleClickRemove = ()=>{
        if (count > 0){
            removeDetail(label.toLowerCase());
        }
    }
    
    return <div className={classes.container}>
        <span className={classes.label} >{label} : </span>
        <button onClick={handleClickAdd}>+</button>
        <span className={classes.count}>{count}</span>
        <button onClick={handleClickRemove}>-</button>
    </div>
}

export default React.memo(Counter);