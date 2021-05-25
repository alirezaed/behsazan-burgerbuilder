import * as actionType from '../store/actionTypes';
import {useDispatch} from 'react-redux';

export function useReduxDispatch(){

    const dispatch = useDispatch();
    const showLoading=()=>{
        dispatch({
            type:actionType.SHOW_LOADING
        });
    }

    const hideLoading=()=>{
        dispatch({
            type:actionType.HIDE_LOADING
        });
    }

    const setOrders=(orderList,totalCount)=>{
        dispatch({
            type:actionType.SET_ORDERS,
            payload:{
                orderList,
                totalCount
            }
        });
    }


    return{
        showLoading,
        hideLoading,
        setOrders
    }


}