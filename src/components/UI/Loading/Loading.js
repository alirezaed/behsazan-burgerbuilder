import classes from './Loading.module.css';
import React from 'react';

function Loading (props){



    return <div className={classes.container}>
        <div className={classes.ldsripple}><div></div><div></div></div>
    </div>

}

export default Loading;