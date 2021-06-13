import React from 'react';
import classes from './BurgerBuilder.module.css';
import BurgerView from './BurgerView/BurgerView';
import Counter from './Counter/Counter';
import TotalAmount from './TotalAmount/TotalAmount';
import Button from '../../components/UI/Button/Button';
import { withLog } from '../../hoc/withLog';
import { connect } from 'react-redux';
import * as actions from '../../store/actionCreator';
import * as asyncActions from '../../store/asyncActions';

class BurgerBuilder extends React.Component {
    
    initialState=()=>{
        return {
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
        const {meat,cheese,salad,history,showMessageBoxModal} = this.props;

        if (!this.props.isLogin){
            showMessageBoxModal({
                title:'Please Login',
                body:'You have to login before sending an order!',
                onOk:()=>{
                    history.push('/Login',{meat,cheese,salad});
                }
            });
            return;
        }
        this.setState({submitting:true});
        this.props.saveOrder({
            meat:meat,
			cheese:cheese,
			salad:salad,
			total_price:this.calculateTotalAmount()
        });
        
    }

    showError= (message)=>{
        this.props.showMessageBoxModal({
            title:'Error',
            body:message,
            type:'error',
            onOk:()=>this.setState({submitting:false})
        });
    }

    render(){
        const {submitting} = this.state;
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
        </div>
    }
}

const mapStateToProps=(state)=>{
    return {
        loading:state.loading,
        meat:state.meat,
        cheese:state.cheese,
        salad:state.salad,
        isLogin:state.isLogin
    }
}

const mapDispatchToProps=(dispach)=>{
    return {
        resetDetails:()=>{
            dispach(actions.reset_details());
        },
        showMessageBoxModal:(info)=>{
            dispach(actions.show_messagebox_modal(info));
        },
        saveOrder:(data)=>{
            dispach(asyncActions.saveOrder(data));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder);