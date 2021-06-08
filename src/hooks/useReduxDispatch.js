import * as actions from '../store/actionCreator';
import {useDispatch} from 'react-redux';

export function useReduxDispatch(){

    const dispatch = useDispatch();
    const showLoading=()=>{
        dispatch(actions.show_loading());
    }

    const hideLoading=()=>{
        dispatch(actions.hide_loading());
    }

    const setOrders=(orderList,totalCount)=>{
        dispatch(actions.set_orders(orderList,totalCount));
    }

    const addDetail=(detailType)=>{
        dispatch(actions.add_detail(detailType))
    };

    const removeDetail=(detailType)=>{
        dispatch(actions.remove_detail(detailType))
    };

    const showMessageBoxModal=(messageBoxModalInfo)=>{
        dispatch(actions.show_messagebox_modal(messageBoxModalInfo));
    }

    const hideMessageBoxModal=()=>{
        dispatch(actions.hide_messagebox_modal());    
    }

    const showToast=(title,message)=>{
        dispatch(actions.show_toast(title,message));
    }

    const hideToast=()=>{
        dispatch(actions.hide_toast());
    }

    const login=(token)=>{
        dispatch(actions.login(token))
    }

    const logout=()=>{
        dispatch(actions.logout())
    }

    return{
        showLoading,
        hideLoading,
        setOrders,
        addDetail,
        removeDetail,
        showMessageBoxModal,
        hideMessageBoxModal,
        showToast,
        hideToast,
        login,
        logout
    }


}