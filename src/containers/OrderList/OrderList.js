import React, { useEffect, useReducer, useState } from 'react';
import {useAxios} from '../../hooks/useAxios';
import Table from '../../components/UI/Table/Table';
import { useReduxDispatch } from '../../hooks/useReduxDispatch';
import { useSelector } from 'react-redux';

function OrderList(props){

    const {showLoading,setOrders } = useReduxDispatch();
    const {post} = useAxios();

    const orders = useSelector(store=>store.orderList);
    const totalCount = useSelector(store=>store.totalOrderCount);

    const columns=[
        { index:1,field:'order_number', title:'Order Number',sortable:true,textAlign:'center' },
        { index:2,field:'create_date', title:'Order Date',sortable:false,textAlign:'center' },
        { index:3,field:'total_price', title:'Price',sortable:true,textAlign:'center' },
        { index:4,field:'comments', title:'Comments',sortable:false,textAlign:'center' }
    ];

    const handleRefreshTable=(data)=>{
        showLoading();
        post('safeorder/GetAllOrders',data)
        .then(result=>{
            setOrders(result.list,result.total_count);
        }).catch(err=>{
            console.log(err);
        })
    }

    return <Table 
            data={orders} 
            columns={columns} 
            keyfield='order_number'
            onRefresh={handleRefreshTable}
            totalCount={totalCount}
         />
}

export default OrderList;