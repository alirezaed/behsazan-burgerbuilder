import React from 'react';
import classes from './BurgerView.module.css';

function BurgerView(props){

    const meats = [];
    for(let i=0;i<props.meat;i++){
        meats.push(<div key={i} className={classes.meat}></div>)
    }

    const cheeses = [];
    for(let i=0;i<props.cheese;i++){
        cheeses.push(<div key={i} className={classes.cheese}></div>)
    }

    const salads = [];
    for(let i=0;i<props.salad;i++){
        salads.push(<div key={i} className={classes.salad}></div>)
    }

    //ConditionalRendering
    const isEmpty = props.meat + props.cheese + props.salad === 0;

    return <div className={classes.container}>
        <div className={classes.topbread}>
            <div className={classes.seeds1} />
            <div className={classes.seeds2} />
        </div>

        {meats}
        {cheeses}
        {salads}

        {isEmpty && <div className={classes.empty} >Please select details</div>}

        <div className={classes.bottombread}></div>
    </div>
}

export default BurgerView;