import React from 'react';
import ReactDOM from 'react-dom';


class CurrentUser extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			list:[]	}
		

	}

	componentDidMount(){
		let self = this;
		this.props.socket.on('current user', function(list){
			let newList = [];
			list.forEach(function(u){
			newList.push(<p>{u}</p>)
			})
			self.setState({
			list:newList
		});
		});
	}
	
	render(){
		return (<div className = "current-user">
			{this.state.list}
			</div>)
	}
}

export default CurrentUser;