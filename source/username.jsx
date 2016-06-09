import React from 'react' ;
import ReactDOM from 'react-dom';
import Hello from './test.jsx';
import Chatrow from  './chat-row.jsx';

class User extends React.Component{
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
    	this.state = {
    		user:"khanh"
    	}
  }
  	onChange(){
  		this.setState({user:this.refs.input.value});
  	}

  	onSubmit(){
  		// console.log("clicked");
		this.props.handleSubmit(this.refs.input.value,this.refs.message.value);
	}

	render (){
		return (<div>
				<input type= "text" placeholder = "asd"  onChange = {this.onChange} ref="input"/>
				<input type="text" placeholder = "message" ref = "message"/>
				<input type="submit" onClick = {this.onSubmit} />
				</div>
		);
	}

}
export default User;