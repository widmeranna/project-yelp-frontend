import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import RestaurantList from '../RestaurantList';

class Home extends Component {
  render(){
    return(
      <div>
        <RestaurantList/>
        <RaisedButton label="Default" />
      </div>
    );
  }
}

export default connect()(Home);
