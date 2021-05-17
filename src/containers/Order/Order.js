import React, { useEffect } from 'react';

function Order(props){

    useEffect(()=>{
        console.log(props);
    },[]);

    return <div>Order</div>
}

export default Order;