import React from 'react';
import ReactDOM from 'react-dom';
var DateFormat = require('date-format');
class Chatrow extends React.Component{
	constructor(props){
			super(props);
			this.state = {};
			let time = Date.parse(this.props.message.time);
			let date = new Date();
			date.setTime(time);
			this.state.date = DateFormat.asString("dd/MM hh:mm",date);
		}
	render(){
		return(
					<p>{this.props.message.user}({this.state.date}):{this.props.message.message}</p>		
			)
	}
}

export default Chatrow;