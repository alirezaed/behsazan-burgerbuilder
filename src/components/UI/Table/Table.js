import classes from './Table.module.css';
import React, { useEffect, useState } from 'react';

function Table(props){


    const [sortField,setSortField] = useState(props.keyfield);
    const [sortOrder,setSortOrder] = useState('asc');
    const [pageIndex,setPageIndex] = useState(1);
    const [pageSize,setPageSize] = useState(20);

    useEffect(()=>{
        const refresh=()=>{
            if (props.onRefresh){
                props.onRefresh({
                    sort_field:'id',
                    sort_order:sortOrder,
                    page_index:pageIndex,
                    page_size:pageSize
                });
            }
        }
        refresh();
    },[sortOrder,pageIndex,pageSize]);

    const handleColumnClick=(field)=>{
        if (sortField === field){
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        }else{
            setSortField(field);
        }
        
    }

    const handlePageSizeClick=(e)=>{
        setPageSize(+e.target.value);
    }
    const handlePageIndexClick=(e)=>{
        setPageIndex(+e.target.value);
    }

    const getData=()=>{
        if (props.onRefresh){
            return props.data;
        }

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
        const totalRecords = props.onRefresh ? props.totalCount : props.data.length;
        const totalPages = Math.ceil(totalRecords / pageSize);
        for(let i =1;i<=totalPages;i++){
            result.push(<option key={i} value={i}>{i}</option>)
        }
        return result;
    }

    const handleClickRow=(item)=>{
        if (props.onRowClick){
            props.onRowClick(item);
        }
    }

    const rowStyle={
        cursor:props.onRowClick ? 'pointer' : 'default'
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
            {getData().map(item=><tr key={item[props.keyfield]} style={rowStyle} onClick={()=>handleClickRow(item)} >
                {props.columns.map(col=>{
                    return <td key={col.field} >{item[col.field]}</td>
                })}
            </tr>)}
        </tbody>
    </table>
    </>

}

export default Table;