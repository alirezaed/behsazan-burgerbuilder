import React from 'react';
import classes from './Tabs.module.css';
import TabLink  from '../../../../components/UI/TabLink/TabLink';

function Tabs(){
    return <div className={classes.container}>
        <TabLink to="/OrderList" >Order List</TabLink>
        <TabLink to="/" >Burger Builder</TabLink>
    </div>
}

export default Tabs;