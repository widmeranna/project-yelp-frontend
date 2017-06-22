import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import {connect} from 'react-redux';
import './index.css';

class RestaurantList extends Component {
  render() {
    // ES6:{} instead of this.props.restaurant:
    const {restaurants} = this.props;
    // console.log(restaurants);
    return (
      <div className="Home-List">
        <div className="descr-restaurant-list">
          <h3>Yelpdemo is the best way to find reviews on local restaurants.</h3>
          <p>
            Explore the favorite diners pastry shops and eateries in your community.
            <br></br>Leave reviews and ratings for your fellow foodies.
          </p>
        </div>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Adress</TableHeaderColumn>
              <TableHeaderColumn>Phone</TableHeaderColumn>
              <TableHeaderColumn>Website</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {
              restaurants.map((restaurant) => {
                return (
                  <TableRow key={restaurant.id}>
                    <TableRowColumn>{restaurant.name}</TableRowColumn>
                    <TableRowColumn>{restaurant.address}</TableRowColumn>
                    <TableRowColumn>{restaurant.phone}</TableRowColumn>
                    <TableRowColumn>{restaurant.website}</TableRowColumn>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({restaurants: state.restaurants});
export default connect(mapStateToProps)(RestaurantList);
