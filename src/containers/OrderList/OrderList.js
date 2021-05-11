import React, { useEffect, useState } from 'react';
import axios from '../../tools/fetch';
import Table from '../../components/UI/Table/Table';

function OrderList(){

    const [orders,setOrders] = useState([]);
    const [totalCount,setTotalCount] = useState(0);

    const columns=[
        { index:1,field:'order_number', title:'Order Number',sortable:true,textAlign:'center' },
        { index:2,field:'create_date', title:'Order Date',sortable:false,textAlign:'center' },
        { index:3,field:'total_price', title:'Price',sortable:true,textAlign:'center' },
        { index:4,field:'comments', title:'Comments',sortable:false,textAlign:'center' }
    ];

    const handleRefreshTable=(data)=>{
        axios.post('order/GetAllOrders',data)
        .then(result=>{
            setOrders(result.data.list);
            setTotalCount(result.data.total_count);
        })
    }

    return <div>
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