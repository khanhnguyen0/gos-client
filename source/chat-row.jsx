import React from 'react';
import ReactDOM from 'react-dom';
class Chatrow extends React.Component{
	render(){
		return(
					<p>{this.props.user}:{this.props.message}</p>		
			)
	}
}

export default Chatrow;