import React, {Component} from 'react';
import logo from './logo.svg';
import './index.css';

const styles = {
  header: {
    textAlign: 'center',
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

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      logged: true,
    };
  }

  handleSearchBoxObChange = (e) => {
    const searchText = e.currentTarget.value;

    this.setState({
      searchText,
    });
    console.log(this.state.searchText);
  };

  handleButtonOnClick = () => {
    console.log('button clicked');
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
              onChange={this.handleSearchBoxObChange}
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

export default Header;
