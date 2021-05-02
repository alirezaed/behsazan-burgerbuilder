import classes from './Table.module.css';
import React from 'react';

function Table(props){

    return <table className={classes.table}>
        <thead>
        <tr>
            {props.columns.map(item=> <th key={item.index}>{item.title}</th> )}
        </tr>
        </thead>
        <tbody>
            {props.data.map(item=><tr key={item[props.keyfield]} >
                {props.columns.map(col=>{
                    return <td key={col.field} >{item[col.field]}</td>
                })}
            </tr>)}
        </tbody>
    </table>

}

export default Table;