import React from 'react';
import classes from './BurgerBuilder.module.css';
import BurgerView from './BurgerView/BurgerView';
import Counter from './Counter/Counter';
import TotalAmount from './TotalAmount/TotalAmount';
import Button from '../../components/UI/Button/Button';
import axios from '../../tools/fetch';
import MessageBox from '../../components/UI/MessageBox/MessageBox';
import {AuthenticationContext} from '../../context/AuthenticationContext'
import { withLog } from '../../hoc/withLog';
import { connect } from 'react-redux';
import { HIDE_LOADING, SHOW_LOADING,RESET_DETAIL } from '../../store/actionTypes';

class BurgerBuilder extends React.Component {
    static contextType = AuthenticationContext;
    
    initialState=()=>{
        return {
            message:'',
            message_type:'',
            submitting:false
        }
    }

    constructor(props){
        super(props);
        this.state=this.initialState();
    }

    calculateTotalAmount=()=>{
        const {meat,cheese,salad} = this.props;
        const initialValue = 5000;
        const meatValue = meat * 5000;
        const cheeseValue = cheese * 4000;
        const saladValue = salad * 2000;
        return initialValue + meatValue + cheeseValue + saladValue;
    }

    handleResetClick=()=>{
        this.setState(this.initialState());
        this.props.resetDetails();
    }

    handleOkClick=()=>{
        const {meat,cheese,salad,showLoading,hideLoading,history} = this.props;

        if (!this.context.isLogin){
            history.push('/Login',{meat,cheese,salad})
            return;
        }
        showLoading();
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
                hideLoading();
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
        const {message_type,message,submitting} = this.state;
        const {meat,cheese,salad} = this.props;

        return <div className={classes.container} >
            <BurgerView />
            <Counter label="Meat" count={meat} />
            <Counter label="Cheese" count={cheese} />
            <Counter label="Salad" count={salad} />
            <TotalAmount totalAmount={this.calculateTotalAmount()} />
            <div className={classes.buttons}>
                <Button disabled={submitting} onClick={this.handleResetClick} title="Reset" />
                <Button disabled={submitting} onClick={this.handleOkClick} title="OK" />
            </div>
            <MessageBox message={message} message_type={message_type} />
        </div>
    }
}

const mapStateToProps=(state)=>{
    return {
        loading:state.loading,
        meat:state.meat,
        cheese:state.cheese,
        salad:state.salad
    }
}

const mapDispatchToProps=(dispach)=>{
    return {
        showLoading:()=>{
            dispach({type:SHOW_LOADING})
        },
        hideLoading:()=>{
            dispach({type:HIDE_LOADING})
        },
        resetDetails:()=>{
            dispach({type:RESET_DETAIL})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder);