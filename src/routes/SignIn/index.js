import React, {Component} from 'react';
import SignInComponent from '../../containers/SignIn';

class SignIn extends Component {
	render(){
		return(
			<SignInComponent router={this.props.history} />
		);
	}
}

export default SignIn;
