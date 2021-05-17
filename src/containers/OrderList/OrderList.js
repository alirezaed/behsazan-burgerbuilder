import React, { useEffect, useReducer, useState } from 'react';
import axios from '../../tools/fetch';
import Table from '../../components/UI/Table/Table';
import Loading from '../../components/UI/Loading/Loading';

function reducer(currentState,action){

    switch(action.type){
        case 'INIT': 
            return{
                orders:action.payload.orders,
                totalCount:action.payload.totalCount,
                loading:false
            };
        case 'LOADING':
            return{
                ...currentState,
                loading:true
            };
        default:return currentState;
    }
}


function OrderList(props){

    // const [orders,setOrders] = useState([]);
    // const [totalCount,setTotalCount] = useState(0);
    // const [loading,setLoading] = useState(false);

    const [state,dispatch] = useReducer(reducer,{
        orders:[],
        totalCount:0,
        loading:false
    });


    const columns=[
        { index:1,field:'order_number', title:'Order Number',sortable:true,textAlign:'center' },
        { index:2,field:'create_date', title:'Order Date',sortable:false,textAlign:'center' },
        { index:3,field:'total_price', title:'Price',sortable:true,textAlign:'center' },
        { index:4,field:'comments', title:'Comments',sortable:false,textAlign:'center' }
    ];

    const handleRefreshTable=(data)=>{
        dispatch({
            type:'LOADING'
        });
        //setLoading(true);
        axios.post('safeorder/GetAllOrders',data)
        .then(result=>{
            dispatch({
                type:'INIT',
                payload:{
                    orders:result.data.list,
                    totalCount:result.data.total_count
                }
            });
            // setOrders(result.data.list);
            // setTotalCount(result.data.total_count);
            // setLoading(false);
        }).catch(err=>{
            if (err.response.status == 403){
                props.history.push('/AccessDenied');
                return;
            }
        })
    }

    console.log('orderListRendered');
    return <div>
        {state.loading && <Loading />}
        <Table 
            data={state.orders} 
            columns={columns} 
            keyfield='order_number'
            onRefresh={handleRefreshTable}
            totalCount={state.totalCount}
         />
    </div>
}

export default OrderList;