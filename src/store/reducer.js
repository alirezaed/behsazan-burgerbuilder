import * as actionType from './actionTypes';

const initStore={
    orderList:[],
    totalOrderCount:0,
    loading:false,
    meat:0,
    cheese:0,
    salad:0
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
        default: return store;
    }
}