import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import $ from 'jquery';
import Chatbox from './chatbox.jsx';


class Login extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isSuccess:false
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.socket = this.socket.bind(this);
		this.logout = this.logout.bind(this);
	}

	handleSubmit(e){
		let self = this;
		console.log('handling');
		e.preventDefault();
		$.post('http://localhost:5000/api/user',{
			userName: this.refs.username.value,
			password: this.refs.password.value
		},function(data){
			if (data.isSuccess){
				console.log('login success');
				self.setState({isSuccess: true,
				user: self.refs.username.value
				});
				$('#root').hide();
				$('#navigate').hide();
			}
			else {
				self.setState({
					wrong: (<p>Error, user and password combination not found</p>)
				});
			}

		});
	}

	logout(){
		let self = this;
		this.state.socket.emit('closing',{});
		$('#navigate').show();
		this.setState({
			isSuccess: false
		});

	}

	componentDidMount(){
		$('#root').hide();
		$('button:first').click(function(){
			$('#root').hide();
			$('#login').show();
		})
		$('button:last').click(function(){
			$('#login').hide();
			$('#root').show();
		})
	}

	socket(){
		var self = this;
		console.log('called');
		var socket = io.connect('http://localhost:5000/');
		socket.emit('user',self.state.user);
		this.state.socket = socket;
		return socket;
	}


	render(){
		if (this.state.isSuccess) {
			return (
				<Chatbox logout={this.logout} user = {this.state.user} socket = {this.socket()} />
			)	
		}
		else return (
		<div >  
			<form onSubmit = {this.handleSubmit} className = "form-signin">  
				<h2 className = "form-signin-heading">Please sign in</h2>
				<input type = "text" placeholder = "user" className = "form-control" ref = "username"/>  
				<input type = "password" placeholder = "password" className = "form-control"  ref = "password"/>
				<input type = "submit" />
			</form>
			{this.state.wrong}
		</div>)
	}
}

ReactDOM.render(<Login/>,document.getElementById('login'));