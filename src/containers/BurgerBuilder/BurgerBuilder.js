import React from 'react';
import classes from './BurgerBuilder.module.css';
import BurgerView from './BurgerView/BurgerView';
import Counter from './Counter/Counter';
import TotalAmount from './TotalAmount/TotalAmount';
import Button from '../../components/UI/Button/Button';

class BurgerBuilder extends React.Component {
    
    constructor(props){
        super(props);

        this.state={
            meat:0,
            salad:0,
            cheese:0
        }
    }

    handleChange=(label,mode)=>{
        this.setState(currentSatet=>{
            return {
                [label.toLowerCase()]: currentSatet[label.toLowerCase()] + (mode ==='add' ? 1 : -1)
            }
        });
    }

    calculateTotalAmount=()=>{
        const {meat,cheese,salad} = this.state;
        const initialValue = 5;
        const meatValue = meat * 3;
        const cheeseValue = cheese * 2;
        const saladValue = salad * 1;
        return initialValue + meatValue + cheeseValue + saladValue;
    }

    render(){
        const {meat,cheese,salad} = this.state;
        return <div className={classes.container} >
            <BurgerView meat={meat} salad={salad} cheese={cheese} />
            <Counter label="Meat" count={meat} onChange={this.handleChange} />
            <Counter label="Cheese" count={cheese} onChange={this.handleChange} />
            <Counter label="Salad" count={salad} onChange={this.handleChange} />
            <TotalAmount totalAmount={this.calculateTotalAmount()} />
            <div className={classes.buttons}>
                <Button title="Reset" />
                <Button title="OK" />
            </div>
        </div>
    }
    
}

export default BurgerBuilder;