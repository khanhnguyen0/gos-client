import React from 'react';
import ReactDOM from 'react-dom';
import User from './username.jsx';
import Chatrow from './chat-row.jsx';
import CurrentUser from './currentUser.jsx';
import $ from 'jquery';
import io from 'socket.io-client';

class Chatbox extends React.Component{		
	constructor(props){
		super(props);
		this.state={
			list :[],
			notification: "",
			currentUser: []
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(){
		let socket = this.props.socket;
		socket.emit('type',this.props.user);
		console.log('typing');
	}

	handleSubmit(user,message){
		let socket = this.props.socket;
		let newList = this.state.list;
		let self = this;
		if (message == "") return;
		let m = {
				user: user,
				message: message,
				time: new Date()
		}
		socket.emit('message',m);
		newList.push(<Chatrow message = {m} />);
			self.setState({
						list:newList
				});
		}

	componentDidMount(){
		let self = this;
		let newList = this.state.list;
		let socket = this.props.socket;
		socket.on('new message',function(m){
			newList.push(<Chatrow message = {m}/>);
			self.setState({
				list:newList
			});
		});
		socket.on('new user',function(user){
			self.setState({
				notification: (<p>{user} has joined the conversation</p>)
			});
		});

		socket.on('typing',function(user){
			self.setState({
				notification: (<p>{user} is typing</p>)
			})
		})

		socket.on('dis',function(user){
			self.setState({
				notification: (<p>{user} has disconnected</p>)
			})
		})

		
		}


	render(){
		return (
			<div id = "chat-box">
				<CurrentUser socket = {this.props.socket}/>
				{this.state.notification}
				{this.state.list}
				<User logout = {this.props.logout} user ={this.props.user} handleChange = {this.handleChange} handleSubmit = {this.handleSubmit}/>

			</div>
			);
	}

}

export default Chatbox;

// ReactDOM.render(<Chatbox/>,document.getElementById('root'));