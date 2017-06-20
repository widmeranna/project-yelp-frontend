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
        </div>
        {
          this.props.children
        }
      </div>
    );
  }
}

export default Header;
