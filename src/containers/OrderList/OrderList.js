import React, { useRef, useState } from 'react';
import {useAxios} from '../../hooks/useAxios';
import Table from '../../components/UI/Table/Table';
import { useReduxDispatch } from '../../hooks/useReduxDispatch';
import { useSelector } from 'react-redux';

function OrderList(props){

    const [price,setPrice] = useState(0);
    const {showLoading,setOrders } = useReduxDispatch();
    const {post} = useAxios();

    const getPrice=React.useCallback(()=>{
        const x = 9000;
        const y = x * 10;
        return y + price;
    },[price]);

    const calculatedPrice = React.useMemo(()=>{
        const x = 9000;
        const y = x * 10;
        return y + price;
    },[price]);

    const refSample = useRef({
        count:10
    });

    const orders = useSelector(store=>store.orderList);
    const totalCount = useSelector(store=>store.totalOrderCount);

    const columns=[
        { index:1,field:'order_number', title:'Order Number',sortable:true,textAlign:'center' },
        { index:2,field:'create_date', title:'Order Date',sortable:false,textAlign:'center' },
        { index:3,field:'total_price', title:'Price',sortable:true,textAlign:'center' },
        { index:4,field:'comment', title:'Comments',sortable:false,textAlign:'center' }
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

    const handleRowClick=(rowData)=>{
        props.history.push('/Order/' + rowData.order_number);
    }

    return <>
        <div onClick={()=>{setPrice(200)}} >Price is : {getPrice()}</div>
        <div onClick={()=>{refSample.current.count = 20}} >current count : {refSample.current.count}</div>
        <Table 
            data={orders} 
            columns={columns} 
            keyfield='order_number'
            onRefresh={handleRefreshTable}
            totalCount={totalCount}
            onRowClick={handleRowClick}
         /></>
}

export default OrderList;