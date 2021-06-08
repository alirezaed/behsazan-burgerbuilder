import React from 'react';
const OrderList = React.lazy(()=> import('../containers/OrderList/OrderList'));
const BurgerBuilder = React.lazy(()=>import('../containers/BurgerBuilder/BurgerBuilder')) ;
const Signup = React.lazy(()=>import('../containers/Signup/Signup')) ;
const Login = React.lazy(()=>import('../containers/Login/Login')) ;
const Timer = React.lazy(()=>import('../containers/VirtualDOM/Timer')) ;
const AccessDenied = React.lazy(()=>import('../containers/AccessDenied/AccessDenied')) ;
const Order = React.lazy(()=>import('../containers/Order/Order')) ;

const routes = [
    {path:'/Signup',Component:Signup},
    {path:'/Login',Component:Login},
    {path:'/Timer',Component:Timer},
    {path:'/AccessDenied',Component:AccessDenied},
    {path:'/Order',Component:Order},
    {path:'/OrderList',Component:OrderList},
    {path:'/BurgerBuilder',Component:BurgerBuilder},
    {path:'/',Component:()=><div>PAGE NOT FOUND</div>},
]

export default routes;