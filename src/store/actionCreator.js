import * as actionType from '../store/actionTypes';

export const show_loading=()=>({
    type:actionType.SHOW_LOADING
});

export const hide_loading=()=>({
    type:actionType.HIDE_LOADING
});

export const set_orders=(orderList,totalCount)=>({
    type:actionType.SET_ORDERS,
    payload:{
        orderList,
        totalCount
    }
});

export const add_detail=(detailType)=>({
    type:actionType.ADD_DETAIL,
    payload:detailType
});

export const reset_details=()=>({
    type:actionType.RESET_DETAIL
});

export const remove_detail=(detailType)=>({
    type:actionType.REMOVE_DETAIL,
    payload:detailType
});

export const show_messagebox_modal=(messageBoxModalInfo)=>({
    type:actionType.SHOW_MESSAGE_MODAL,
    payload:{
        ...messageBoxModalInfo
    }
});

export const hide_messagebox_modal=()=>({
    type:actionType.HIDE_MESSAGE_MODAL
});

export const hide_toast=()=>({
    type:actionType.HIDE_TOAST
});

export const show_toast=(title,message)=>({
    type:actionType.SHOW_TOAST,
    payload:{
        title,
        message
    }
});

export const login=(token)=>({
    type:actionType.LOGIN,
    payload:token
});

export const logout=()=>({
    type:actionType.LOGOUT
});