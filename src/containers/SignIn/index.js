import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './index.css';
import { Checkbox } from 'material-ui';
import UnCheckedIcon from 'material-ui/svg-icons/toggle/check-box-outline-blank';
import CheckedIcon from 'material-ui/svg-icons/toggle/check-box';


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
      <Checkbox
        uncheckedIcon={<UnCheckedIcon style={{fill: "#00bcd4"}} />}
        checkedIcon={<CheckedIcon style={{fill: "	#00bcd4"}} />}
        label="Remember me"/>
        <br/>
        <RaisedButton
          primary={true}
          label="Sign in"
        />
        <p>Sign up</p>
        <p>Forgot your password?</p>
      </div>
    );
  }
}

export default SignIn;
