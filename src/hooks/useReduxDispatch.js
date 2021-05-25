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

    const addDetail=(detailType)=>{
        dispatch({type:actionType.ADD_DETAIL,payload:detailType})
    };

    const removeDetail=(detailType)=>{
        dispatch({type:actionType.REMOVE_DETAIL,payload:detailType})
    };

    return{
        showLoading,
        hideLoading,
        setOrders,
        addDetail,
        removeDetail
    }


}