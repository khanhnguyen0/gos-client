import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
const API = 'http://localhost:5000/api/user/';
const newUserAPI = 'http://localhost:5000/api/new_user';

class Register extends React.Component{
	constructor(props){
		super(props);
		this.onChange = this.onChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleUserChange = this.handleUserChange.bind(this);
		this.state = {
			status: (<p></p>),
			isValid: false
		}
	}

	handleUserChange(){
		var self = this;
		let user = this.refs.username.value;
		$.get(API+user,function(res){
			if (res){
				self.setState({
				status: (<p>The user {user} is available</p>)
			});
			}
			else {
				self.setState({
				status: (<p>The user {user} is already taken!</p>),
				isValid:false
			});
			}
		})
	}

	onChange(){
		let password = this.refs.password.value;
		let password2 = this.refs.password2.value;
		if (password2 != password){
			this.setState({
				status: (<p>The passwords does not match!</p>)
			});
		} else {
			this.setState({
				status: "",
				isValid: true
			})
		}
	}

	handleSubmit(e){
		let self = this;
		e.preventDefault();
		if (this.state.isValid){
			console.log('a');
			$.post(newUserAPI,{
				userName: self.refs.username.value,
				password: self.refs.password.value
			},function(res){
				if (res.id){
					self.setState({
						status: (<p>User {self.refs.username.value} is registered successfully</p>)
					});
				}
				else {
					self.setState({
						status: (<p>Error, something happened</p>)
					});

				}
			})
		}
	}

	render(){
		return (<div className = "container">  
							<form className = "form-signin" onSubmit = {this.handleSubmit}>  
								<h2 className = "form-signin-heading">Registration</h2>
								<input type = "text" ref = "username" className = "form-control" placeholder="User" onBlur = {this.handleUserChange}/>
								<input type = "password" ref = "password" className = "form-control" placeholder = "password"/>
								<input type = "password" ref = "password2" className = "form-control" placeholder = "retype password" onBlur = {this.onChange}/>
								<input type = "submit"/>
							</form>
							{this.state.status}
						</div>)
		
	}
}

ReactDOM.render(<Register/>,document.getElementById('root'));