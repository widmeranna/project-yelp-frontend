import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';

class Home extends Component {
  render(){
    return(
      <div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <RaisedButton label="Default" />
      </div>
    );
  }
}

export default connect()(Home);
