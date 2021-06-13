import React, { useEffect, useState } from 'react';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import { useAxios } from '../../hooks/useAxios';
import { useInput } from '../../hooks/useInput';
import { useReduxDispatch } from '../../hooks/useReduxDispatch';

function Order(props){

    const [orderDetail,setOrderDetail] = useState();
    const {showLoading,hideLoading} = useReduxDispatch();
    const comment = useInput();
    const {post} = useAxios();
    
    useEffect(()=>{
        post('/safeorder/GetOrder',{order_number:props.match.params.id})
            .then(result=>{
                setOrderDetail(result);
                comment.reset(result.comment);
            })
    },[]);

    const handleSaveComment=()=>{
        showLoading();
        post('/safeorder/SaveComment',{
            order_number:orderDetail.order_number,
            comment:comment.value
        }).then(result=>{
            hideLoading();
        });
    }

    if (!orderDetail){
        return "Loading...";
    }

    return <div>
        <div>Order Number: {orderDetail.order_number}</div>
        <div>Date: {orderDetail.create_date}</div>
        <div>Status: {orderDetail.status}</div>
        <div>Total Price: {orderDetail.total_price}</div>
        <form>
            <Input {...comment} id='comment' lable="Comment"  />
            <Button onClick={handleSaveComment} title="Save Comment" />
        </form>
        
    </div>
}

export default Order;