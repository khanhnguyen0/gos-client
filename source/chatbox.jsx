import React from 'react';
import ReactDOM from 'react-dom';
import User from './username.jsx';
import Chatrow from './chat-row.jsx';
class Chatbox extends React.Component{		
	constructor(props){
		super(props);
		this.state={
			list :[]
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(user,message){
		console.log("clicked");
		var newList = this.state.list;
		newList.push(<Chatrow user = {user} message = {message}/>);
		this.setState({
			list:newList
		});
		console.log(this.state.list);
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