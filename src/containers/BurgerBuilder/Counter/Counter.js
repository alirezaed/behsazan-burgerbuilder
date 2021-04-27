import React from 'react';
import classes from './Counter.module.css';

class Counter extends React.Component{

    handleClickAdd = ()=>{
        const {count,label, onChange} = this.props;
        if (count < 3){
            onChange(label,'add');
        }
    }

    handleClickRemove = ()=>{
        const {count,label, onChange} = this.props;
        if (count > 0){
            onChange(label,'remove');
        }
    }

    render(){
        const {label,count} = this.props;
        
        return <div className={classes.container}>
            <span className={classes.label} >{label} : </span>
            <button onClick={this.handleClickAdd}>+</button>
            <span className={classes.count}>{count}</span>
            <button onClick={this.handleClickRemove}>-</button>
        </div>
    }
}

export default Counter;