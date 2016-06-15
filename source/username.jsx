import React from 'react' ;
import ReactDOM from 'react-dom';
import Chatrow from  './chat-row.jsx';

class User extends React.Component{
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
    	
  }

  	onSubmit(e){
  		e.preventDefault();
		this.props.handleSubmit(this.props.user,this.refs.message.value);
		this.refs.message.value="";
	}

	render (){
		return (<div>
			<form onSubmit = {this.onSubmit} id ="input">
				<h3>{this.props.user}</h3>
				<input type="text" placeholder = "message" onBlur = {this.props.handleChange} ref = "message"/>
				<input type="submit" />
				<button className = "btn btn-default" onClick = {this.props.logout}>  
				Logout
			</button>
			</form>	

				</div>
		);
	}

}
export default User;