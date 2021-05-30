import * as actionType from './actionTypes';

const initStore={
    orderList:[],
    totalOrderCount:0,
    loading:false,
    messageBoxModal:{
        title:'',
        body:'',
        type:'',
        onOK:()=>{},
        onCancel:()=>{}
    }
}

export function reducer(store=initStore,action){

    switch(action.type){
        case actionType.SHOW_LOADING:
            return {
                ...store,
                loading:true
            };
        case actionType.HIDE_LOADING:
            return {
                ...store,
                loading:false
            };
        case actionType.SET_ORDERS:
            return {
                ...store,
                orderList:action.payload.orderList,
                totalOrderCount:action.payload.totalCount,
                loading:false
            };
        case actionType.SHOW_MESSAGE_MODAL:
            return{
                ...store,
                messageBoxModal:{
                    ...action.payload
                }
            }
        case actionType.HIDE_MESSAGE_MODAL:
            return{
                ...store,
                messageBoxModal:{...initStore.messageBoxModal}
            }
        default: return store;
    }
}