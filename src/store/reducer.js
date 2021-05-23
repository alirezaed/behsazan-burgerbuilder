import * as actionType from './actionTypes';

const initStore={
    orderList:[],
    totalOrderCount:0,
    loading:false
}


export function reducer(store=initStore,action){

    switch(action.type){
        case actionType.SHOW_LOADING:
            return {
                ...store,
                loading:true
            };
        case actionType.SET_ORDERS:
            return {
                ...store,
                orderList:action.payload.orderList,
                totalOrderCount:action.payload.totalCount,
                loading:false
            };
        default: return store;
    }
}