import React, {Component} from 'react';
import logo from './logo.svg';
import './index.css';

const styles = {
  header: {
    textAlign: 'center',
  }
}

class Header extends Component {
  render() {
    return (
      <div style={styles.header}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Project Yelp - Team 2 - Frontend</h2>
const Login = () => {
  return(
    <div>
      <Link to="/sign-in"><FlatButton style={styles.buttonTextColor} label="Sign In" /></Link>
      <Link to="/sign-up"><FlatButton style={styles.buttonTextColor} label="Sign Up" /></Link>
    </div>
  );
}

const Logged = () => {
  return(
    <div>
      <Link to="/edit-profile"><FlatButton style={styles.buttonTextColor} label="Edit Profile" /></Link>
      <Link to="/sign-out"><FlatButton style={styles.buttonTextColor} label="Sign Out" /></Link>
    </div>
  );
};
        </div>
        {
          this.props.children
        }
      </div>
    );
  }
}

export default Header;
