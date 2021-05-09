import React, { useEffect, useState } from 'react';
import axios from '../../tools/fetch';
import Table from '../../components/UI/Table/Table';

function OrderList(){

    const [orders,setOrders] = useState([]);

    useEffect(()=>{
        axios.post('order/GetAllOrders')
        .then(result=>{
            setOrders(result.data);
        })

    },[]);

    const columns=[
        { index:1,field:'order_number', title:'Order Number',sortable:true,textAlign:'center' },
        { index:2,field:'create_date', title:'Order Date',sortable:false,textAlign:'center' },
        { index:3,field:'total_price', title:'Price',sortable:true,textAlign:'center' },
        { index:4,field:'comments', title:'Comments',sortable:false,textAlign:'center' }
    ];

    const studernst = [{
        id:1,
        name:'hasan',
        age:12
    },{
        id:2,
        name:'reza',
        age:20
    },{
        id:3,
        name:'ali',
        age:22
    }];

    const stColumns=[
        {title:'ID',field:'id',sortable:false,index:0},
        {title:'Full Name',field:'name',sortable:false,index:1},
        {title:'Age',field:'age',sortable:false,index:2}
    ]
    return <div>
        <Table data={orders} columns={columns} keyfield='order_number' />
        <Table data={studernst} columns={stColumns} keyfield='id' />
    </div>
}

export default OrderList;