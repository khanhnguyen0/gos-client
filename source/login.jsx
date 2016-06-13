import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Chatbox from './chatbox.jsx'

class Login extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			userTaken : false
		}
		this.userOnChange = this.userOnChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	userOnChange(){
		
	}
	handleSubmit(e){
		let self = this;
		e.preventDefault();
		$.post('http://localhost:5000/api/user',{
			userName: this.refs.username.value,
			password: this.refs.password.value
		},function(data){
			if (data.isSuccess){
				console.log('login success')
				self.setState({isSuccess: true,
					user: self.refs.username.value
				});
			}
			else {
				self.setState({
					wrong: (<p>Error, user and password combination not found</p>)
				});
			}

		});
	}
	render(){
		if (this.state.isSuccess) {
			return (
				<Chatbox user = {this.state.user} />
			)	
		}
		else return (
		<div>  
			<form onSubmit = {this.handleSubmit}>  
				<input type = "text" placeholder = "user" onChange = {this.userOnChange} ref = "username"/>  
				<input type = "password" placeholder = "password"  ref = "password"/>
				<input type = "submit" />
			</form>
			{this.state.wrong}
		</div>)
	}
}

ReactDOM.render(<Login/>,document.getElementById('login'));