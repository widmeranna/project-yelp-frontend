import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './index.css';
import { Checkbox } from 'material-ui';
import UnCheckedIcon from 'material-ui/svg-icons/toggle/check-box-outline-blank';
import CheckedIcon from 'material-ui/svg-icons/toggle/check-box';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import { checkLogin } from '../../store/actions/index'

class SignIn extends Component {

  constructor(props){
    super(props);

    this.state={
      email: '',
      password: ''
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
    const password = event.currentTarget.value;
    this.setState({password});
  }

  handleSignIn = () => {
    if (this.props.dispatch(checkLogin(this.state))) this.props.router.push("/");
  }

  render() {
    return (
      <div className="SignIn-form">
        <Paper style={{paddingBottom: '10px', paddingTop: '10px', paddingLeft: '10px', paddingRight: "10px"}} zDepth={1}>
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
        </Paper>
      </div>
    );
  }
}

const maptStateToProps =(state) => ({
  users: state.users,
})

export default connect(maptStateToProps)(SignIn);
