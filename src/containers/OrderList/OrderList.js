import React, { useEffect, useReducer, useState } from 'react';
import axios from '../../tools/fetch';
import Table from '../../components/UI/Table/Table';
import { useReduxDispatch } from '../../hooks/useReduxDispatch';
import * as actionType from '../../store/actionTypes';
import { useSelector } from 'react-redux';

function reducer(currentState,action){

    switch(action.type){
        case 'INIT': 
            return{
                orders:action.payload.orders,
                totalCount:action.payload.totalCount
            };
        
        default:return currentState;
    }
}


function OrderList(props){

    const {showLoading,setOrders } = useReduxDispatch();

    const columns=[
        { index:1,field:'order_number', title:'Order Number',sortable:true,textAlign:'center' },
        { index:2,field:'create_date', title:'Order Date',sortable:false,textAlign:'center' },
        { index:3,field:'total_price', title:'Price',sortable:true,textAlign:'center' },
        { index:4,field:'comments', title:'Comments',sortable:false,textAlign:'center' }
    ];

    const handleRefreshTable=(data)=>{
        showLoading();
        axios.post('safeorder/GetAllOrders',data)
        .then(result=>{
            setOrders(result.data.list,result.data.total_count);
        }).catch(err=>{
            if (err.response.status == 403){
                props.history.push('/AccessDenied');
                return;
            }
        })
    }

    const handleDivClick=(e)=>{
        // setS1(2);
        // setS2(2);
    }

    const orders = useSelector(store=>store.orderList);
    const totalCount = useSelector(store=>store.totalOrderCount);

    console.log('orderListRendered');
    return <div onClick={handleDivClick}>
        
        <Table 
            data={orders} 
            columns={columns} 
            keyfield='order_number'
            onRefresh={handleRefreshTable}
            totalCount={totalCount}
         />
    </div>
}

export default OrderList;