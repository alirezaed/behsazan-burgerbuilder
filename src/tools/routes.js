import React from 'react';
const BurgerBuilder = React.lazy(()=> import('../containers/BurgerBuilder/BurgerBuilder')) ;
const OrderList = React.lazy(()=> import('../containers/OrderList/OrderList')) ;
const Signup = React.lazy(()=> import('../containers/Signup/Signup')) ;
const Login = React.lazy(()=> import('../containers/Login/Login')) ;
const Timer = React.lazy(()=> import('../containers/VirtualDOM/Timer')) ;
const AccessDenied = React.lazy(()=> import('../containers/AccessDenied/AccessDenied')) ;
const Order = React.lazy(()=> import('../containers/Order/Order')) ;

const routes = [
    {path:'/OrderList',component:OrderList},
    {path:'/Signup',component:Signup},
    {path:'/Login',component:Login},
    {path:'/Timer',component:Timer},
    {path:'/AccessDenied',component:AccessDenied},
    {path:'/Order/:id',component:Order},
    {path:'/',component:BurgerBuilder},
]

export default routes;