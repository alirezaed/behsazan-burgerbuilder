import React, { useContext } from 'react';
import classes from './Tabs.module.css';
import TabLink  from '../../../../components/UI/TabLink/TabLink';
import { useSelector } from 'react-redux';

function Tabs(){

    const isLogin = useSelector(store=>store.isLogin);

    return <div className={classes.container}>
        {isLogin && <TabLink to="/OrderList" >Order List</TabLink>}
        <TabLink to="/BurgerBuilder" >Burger Builder</TabLink>
    </div>
}

export default Tabs;