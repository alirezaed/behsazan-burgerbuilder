import React from 'react';
import Header from './Header/Header';
import classes from './Layout.module.css';

function Layout(props){
    return <div className={classes.container}>
        <Header />
        <div className={classes.mainbody}>
            {props.children}
        </div>
    </div>
}

export default Layout;