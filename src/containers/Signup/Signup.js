
import classes from './Signup.module.css';
import React from 'react';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import axios from '../../tools/fetch';
import MessageBox  from '../../components/UI/MessageBox/MessageBox';

class Signup extends React.Component{

    constructor(props){
        super(props);

        this.state=this.initState;

    }

    initState={
        name:'',
        email:'',
        password:'',
        username:'',
        message:'',
        message_type:''
    }

    handleSubmitClick=(e)=>{
        e.preventDefault();
        const {name,email,password,username} = this.state;
        const formdata={
            username,
			password,
			fullname:name,
			email
        }
        axios.post('user/signup',formdata).then(result=>{
            this.setState({
                ...this.initState,
                message:result.data.message,
                message_type:result.data.status ? 'success' : 'error',
            });
        }).catch(er=>{
            this.setState({
                message:e.errorMessage,
                message_type:'error'
            });
        })

    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    render(){
        const {name,email,password,username,message,message_type}  = this.state;

        return <form className={classes.form} onSubmit={this.handleSubmitClick}>
            <Input required name='username' lable="Username" value={username} onChange={this.handleChange} />
            <Input required name='password' type='password' lable="Password" value={password} onChange={this.handleChange} />
            <Input name='name' lable="Name" value={name} onChange={this.handleChange} />
            <Input name='email' lable="Email" value={email} onChange={this.handleChange} />
            <div>
                <Button title="Submit"/>
            </div>
            <MessageBox message={message} message_type={message_type} />
        </form>
    }
}

export default Signup;