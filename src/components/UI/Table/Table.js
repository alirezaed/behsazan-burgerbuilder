import classes from './Table.module.css';
import React, { useState } from 'react';

function Table(props){


    const [sortField,setSortField] = useState(props.keyfield);
    const [sortOrder,setSortOrder] = useState('acs');
    const [pageIndex,setPageIndex] = useState(1);
    const [pageSize,setPageSize] = useState(20);


    const handleColumnClick=(field)=>{
        if (sortField === field){
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        }else{
            setSortField(field);
        }
    }
    const handlePageSizeClick=(e)=>{
        setPageSize(e.target.value)
    }
    const handlePageIndexClick=(e)=>{
        setPageIndex(e.target.value)
    }

    const getData=()=>{
        let result = props.data.sort((a,b)=>{
            return sortOrder === 'desc' ? a[sortField] - b[sortField] : b[sortField] - a[sortField];
        });
        result = result.filter((item,index)=>{
            return index >= (pageIndex -1) * pageSize && index < pageIndex * pageSize;
        });
        return result;
    }

    

    const getPageIndexes=()=>{
        const result=[];
        const totalPages = Math.ceil(props.data.length / pageSize);
        for(let i =1;i<=totalPages;i++){
            result.push(<option key={i} value={i}>{i}</option>)
        }
        return result;
    }

    

    return <> 
    <div className={classes.pagintation}>
        Page Index 
        <select onClick={handlePageIndexClick}>
            {getPageIndexes()}
        </select>
        Page Size 
        <select onClick={handlePageSizeClick}>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
        </select>
    </div>
    <table className={classes.table}>
        <thead>
            <tr>
                {props.columns.map(item=>{
                    let sortable={};
                    if (item.sortable){
                        sortable={
                            className:classes.sortable,
                            onClick:()=>handleColumnClick(item.field)
                        }
                    }
                    return <th key={item.index} {...sortable} >{item.title}</th>
                }  )}
            </tr>
        </thead>
        <tbody>
            {getData().map(item=><tr key={item[props.keyfield]} >
                {props.columns.map(col=>{
                    return <td key={col.field} >{item[col.field]}</td>
                })}
            </tr>)}
        </tbody>
    </table>
    </>

}

export default Table;