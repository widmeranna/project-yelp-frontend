import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './index.css';


class SignIn extends Component {
  render() {
    return (
      <div className="SignIn-form">
        <h2>Sign in</h2>
        <TextField
          className="Email-input"
          type="email"
          floatingLabelText="Your email:"
          fullWidth={true}
        />
      <TextField className="Password-Input"
          hintText="Password Field"
          floatingLabelText="Password"
          type="password"
          fullWidth={true}
        />
        <br/>
        <input
          type="checkbox"
          label="Remember me"
        />
        <RaisedButton
          primary={true}
          label="Sign in"
        />

      </div>
    );
  }
}

export default SignIn;
