import  React from 'react' ;
import ReactDOM from 'react-dom';
export default class Hello extends React.Component { 
	render() {
		return ( <h1>Welcome, {this.props.user} </h1>) ; 
	}
}
ReactDOM.render(<Hello user = "khanh"/>, document.getElementById('root'));