import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './index.css';
import { Checkbox } from 'material-ui';
import UnCheckedIcon from 'material-ui/svg-icons/toggle/check-box-outline-blank';
import CheckedIcon from 'material-ui/svg-icons/toggle/check-box';
import {connect} from 'react-redux';

class SignIn extends Component {

  constructor(props){
    super(props);

    this.state={
      email: '',
      pwd: '',
      checked: false,
      logged: false
    }
  }

  checkBoxHandler = () => {
    this.setState({checked: true});
    console.log("in da check");
  }

  emailHandler = (event) => {
    const email = event.currentTarget.value;
    this.setState({email});
  }

  pwdHandler = (event) => {
    const pwd = event.currentTarget.value;
    this.setState({pwd});
  }

  handleSignIn = () => {
    for (let key in this.props.users) {
      // console.log(this.props.users[key]);
      if (this.props.users[key].email === this.state.email &&
        this.props.users[key].password === this.state.pwd) {
        this.setState({logged: true});
        this.props.router.push("/");
      }
      else {
        console.log("wrong username or password...");
      }
    }
  }


  render() {
    return (
      <div className="SignIn-form">
        <h2>Sign in</h2>
        <TextField
          className="Email-input"
          type="email"
          floatingLabelText="Your email:"
          fullWidth={true}
          onChange={this.emailHandler}
        />
        <TextField className="Password-Input"

          floatingLabelText="Password"
          type="password"
          fullWidth={true}
          onChange={this.pwdHandler}
        />
        <Checkbox
        uncheckedIcon={<UnCheckedIcon style={{fill: "#00bcd4"}} />}
        checkedIcon={<CheckedIcon style={{fill: "	#00bcd4"}} />}
        label="Remember me"
        onCheck={this.checkBoxHandler}
        />

        <br/>
        <RaisedButton
          primary={true}
          label="Sign in"
          onTouchTap={this.handleSignIn}
        />
      <p>Sign up</p>
        <p>Forgot your password?</p>
      </div>
    );
  }
}

const maptStateToProps =(state) => ({
  users: state.users,
})

export default connect(maptStateToProps)(SignIn);
