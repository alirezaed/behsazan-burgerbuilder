import React from 'react';
import classes from './BurgerBuilder.module.css';
import BurgerView from './BurgerView/BurgerView';
import Counter from './Counter/Counter';
import TotalAmount from './TotalAmount/TotalAmount';
import Button from '../../components/UI/Button/Button';
import axios from '../../tools/fetch';
import MessageBox from '../../components/UI/MessageBox/MessageBox';
import {AuthenticationContext} from '../../context/AuthenticationContext'

class BurgerBuilder extends React.Component {
    static contextType = AuthenticationContext;
    
    initialState=()=>{
        const data = this.props.location.state;
        return {
            meat:data ? data.meat : 1,
            salad:data ? data.salad :1,
            cheese:data ? data.cheese :1,
            message:'',
            message_type:'',
            submitting:false
        }
    }

    constructor(props){
        super(props);

        this.state=this.initialState();
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
        const initialValue = 5000;
        const meatValue = meat * 5000;
        const cheeseValue = cheese * 4000;
        const saladValue = salad * 2000;
        return initialValue + meatValue + cheeseValue + saladValue;
    }

    handleResetClick=()=>{
        this.setState(this.initialState());
    }

    handleOkClick=()=>{
        const {meat,cheese,salad} = this.state;

        if (!this.context.isLogin){
            this.props.history.push('/Login',{meat,cheese,salad})
            return;
        }
        
        this.setState({submitting:true});
        
        axios.post('/order/addorder',{
            meat:meat,
			cheese:cheese,
			salad:salad,
			total_price:this.calculateTotalAmount()
        }).then(result=>{
            if (result.data.status){
                this.setState({
                    ...this.initialState,
                    message_type:'success',
                    message:`Your Order Successfully Added. Order Number Is : ${result.data.order_number} `,
                });
            }else{
                this.showError(result.data.message);
            }
        }).catch(error=>{
            this.showError(error);
        });
    }

    showError= (message)=>{
        this.setState({
            message_type:'error',
            message:message,
            submitting:false
        });
    }

    

    render(){
        const {meat,cheese,salad,message_type,message,submitting} = this.state;

        return <div className={classes.container} >
            <BurgerView meat={meat} salad={salad} cheese={cheese} />
            <Counter label="Meat" count={meat} onChange={this.handleChange} />
            <Counter label="Cheese" count={cheese} onChange={this.handleChange} />
            <Counter label="Salad" count={salad} onChange={this.handleChange} />
            <TotalAmount totalAmount={this.calculateTotalAmount()} />
            <div className={classes.buttons}>
                <Button disabled={submitting} onClick={this.handleResetClick} title="Reset" />
                <Button disabled={submitting} onClick={this.handleOkClick} title="OK" />
            </div>
            <MessageBox message={message} message_type={message_type} />
        </div>
    }
}

export default BurgerBuilder;