import React from 'react' ;
import ReactDOM from 'react-dom';
import Chatrow from  './chat-row.jsx';

class User extends React.Component{
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
    	
  }
  	onChange(){
  		this.setState({user:this.refs.input.value});
  	}

  	onSubmit(e){

  		e.preventDefault();
		this.props.handleSubmit(this.props.user,this.refs.message.value);
		this.refs.message.value="";
	}

	render (){
		return (<div>
			<form onSubmit = {this.onSubmit} id ="input">
				<p>{this.props.user}</p>
				<input type="text" placeholder = "message" ref = "message"/>
				<input type="submit" />
			</form>	
				</div>
		);
	}

}
export default User;