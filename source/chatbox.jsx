import React from 'react';
import ReactDOM from 'react-dom';
import User from './username.jsx';
import Chatrow from './chat-row.jsx';
import $ from 'jquery'

class Chatbox extends React.Component{		
	constructor(props){
		super(props);
		this.state={
			list :[]
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.update = this.update.bind(this);
	}
	handleSubmit(user,message){
		console.log(this.state.list);
		$.post('http://localhost:3000/api/messages',{
			user: user,
			message: message
		}, function(data){
			console.log(data)
		});
		
	}
	componentDidMount(){
		var self = this;
		setInterval(function () {
			self.update();
		},500);
	}
	update(){
		var self = this;
		console.log('updated');
		var newList = [];
		$.get('http://localhost:3000/api/messages',function(data){
			console.log(data);
			data.map(function(m){
				newList.push(<Chatrow user = {m.user} message = {m.message}/>);
			});
			self.setState({
						list:newList
				});
		});
		
	}
	render(){
		return (
			<div>
				<User handleSubmit = {this.handleSubmit}/>
				{this.state.list}
			</div>
			);
	}

}

ReactDOM.render(<Chatbox/>,document.getElementById('root'));