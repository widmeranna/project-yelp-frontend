import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Link, withRouter } from 'react-router-dom';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import qs from 'query-string';


const appName = 'Yelp';
const styles = {
  title: {
    cursor: 'pointer',
  },
  container: {
  },
  toolbar: {
    backgroundColor: 'red',
    color: 'white',
    marginBottom: 50,
  },
  content: {
    width: 960,
    margin: 'auto',
    paddingLeft: 15,
    paddingRight: 15,
  },
  logo: {
    paddingLeft: 20,
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bolder',
    fontSize: 30,
    cursor: 'pointer',
    textDecoration: 'none',
  },
  app: {
    textDecoration: 'none',
  },
  buttonTextColor: {
    color: 'white',
  }
}

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

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      logged: false,
    };
  }

  handleSearchBoxOnChange = (e) => {
    const searchText = e.currentTarget.value;

    this.setState({
      searchText,
    });
    console.log(this.state.searchText);
  };

  handleButtonOnClick = () => {
    // 1. params
    // routing
    // redirect to url/restaurants/search?=searchText

    this.props.history.push({pathname: '/search', search: qs.stringify({query: this.state.searchText})});
  };

  render(){
    return(
      <div style={styles.container}>
        <Toolbar style={styles.toolbar}>
          <ToolbarGroup firstChild={true}>
            <Link to="/" style={styles.app}><ToolbarTitle text={appName} style={styles.logo} /></Link>
            <Link to="/about"><FlatButton style={{color: 'white'}} label="About" /></Link>
            <Link to="/contact"><FlatButton style={{color: 'white'}} label="Contact" /></Link>
          </ToolbarGroup>

          <ToolbarGroup>
            <TextField
              hintText="Find Restaurants"
              onChange={this.handleSearchBoxOnChange}
              value={this.state.searchText}
              type="input"
              underlineStyle={{borderColor: 'white'}}
              underlineFocusStyle={{borderColor: 'white'}}
              hintStyle={{color: 'white'}}
              floatingLabelStyle={{color: 'white'}}
            />
            <RaisedButton label="Search" style={{color: 'white'}} onClick={this.handleButtonOnClick} />
          </ToolbarGroup>

          <ToolbarGroup lastChild={true}>
            {this.state.logged ? <Logged /> : <Login />}
          </ToolbarGroup>
        </Toolbar>
        <div style={styles.content}>
          {
            this.props.children
          }
        </div>
      </div>
    );
  }
}

const maptStateToProps = (state) => ({
  restaurants: state.restaurants,
});

export default connect(maptStateToProps)(withRouter(Header));
