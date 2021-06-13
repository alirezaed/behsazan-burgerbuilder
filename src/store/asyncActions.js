import * as actions from '../store/actionCreator';

export function login(username,password,history){
    return (dispatch,getState,{axios})=>{
        dispatch(actions.show_loading());
        axios.post('user/login',{username,password})
            .then(result=>{
                if (result.data.status){
                    dispatch(actions.login(result.data.message));
                    dispatch(actions.show_toast('Success','Wellcome!'))
                    history.push('/BurgerBuilder');
                }
            }).finally(r=>{
                dispatch(actions.hide_loading());
            });
    }
}

export function loadOrders(data){
    return (dispatch,getstate,{axios})=>{
        dispatch(actions.show_loading());
        axios.post('safeorder/GetAllOrders',data)
        .then(result=>{
            dispatch(actions.set_orders(result.data.list,result.data.total_count));
        }).catch(err=>{
            console.log(err);
        }).finally(r=>{
            dispatch(actions.hide_loading());
        })
    }
}

export function saveOrder({meat,cheese,salad,total_price}){
    return (dispatch,getstate,{axios})=>{
        dispatch(actions.show_loading());
        axios.post('/order/addorder',{
            meat,
			cheese,
			salad,
			total_price
        }).then(result=>{
            if (result.data.status){
                dispatch(actions.show_messagebox_modal({
                    title:'Successfull',
                    body:`Your Order Successfully Added. Order Number Is : ${result.data.order_number} `,
                    type:'success'
                }));
                dispatch(actions.hide_loading());
            }else{
                dispatch(actions.show_messagebox_modal({
                    title:'Error',
                    body:result.data.message,
                    type:'error',
                    onOk:()=>{}
                }));
            }
        }).catch(error=>{
            dispatch(actions.show_messagebox_modal({
                title:'Error',
                body:error,
                type:'error',
                onOk:()=>{}
            }));
        }).finally(r=>{
            
        });
    }
}