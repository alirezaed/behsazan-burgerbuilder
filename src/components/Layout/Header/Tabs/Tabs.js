import React, { useContext } from 'react';
import classes from './Tabs.module.css';
import TabLink  from '../../../../components/UI/TabLink/TabLink';
import {AuthenticationContext} from '../../../../context/AuthenticationContext';
function Tabs(){

    const authContext = useContext(AuthenticationContext);

    return <div className={classes.container}>
        {authContext.isLogin && <TabLink to="/OrderList" >Order List</TabLink>}
        <TabLink to="/BurgerBuilder" >Burger Builder</TabLink>
    </div>
}

export default Tabs;