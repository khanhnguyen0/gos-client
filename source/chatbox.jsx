import React from 'react';
import ReactDOM from 'react-dom';
import User from './username.jsx';
import Chatrow from './chat-row.jsx';
import $ from 'jquery'

let API ='https://dry-gorge-31633.herokuapp.com/api/messages/'

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
		$.post(API,{
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
		$.get(API,function(data){
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