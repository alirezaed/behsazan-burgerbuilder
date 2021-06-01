import * as actionType from './actionTypes';

const initStore={
    orderList:[],
    totalOrderCount:0,
    loading:false,
    meat:0,
    cheese:0,
    salad:0,
    messageBoxModal:{
        title:'',
        body:'',
        type:'',
        onOK:()=>{},
        onCancel:()=>{}
    },
    toast:{
        show:false,
        title:'',
        message:''
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
        case actionType.ADD_DETAIL:
            return {
                ...store,
                [action.payload]:store[action.payload] + 1
            };
        case actionType.REMOVE_DETAIL:
            return {
                ...store,
                [action.payload]:store[action.payload] - 1
            };
        case actionType.RESET_DETAIL:
            return {
                ...store,
                cheese:initStore.cheese,
                salad:initStore.salad,
                meat:initStore.meat
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
        case actionType.SHOW_TOAST:
            return{
                ...store,
                toast:{
                    ...action.payload,
                    show:true
                }
            }
        case actionType.HIDE_TOAST:
            return{
                ...store,
                toast:{
                    ...initStore.toast
                }
            }
        default: return store;
    }
}