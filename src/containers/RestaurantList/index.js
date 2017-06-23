import React from 'react';
import { connect } from 'react-redux';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';
import RestaurantListItem from '../../components/RestaurantListItem';
import './index.css';
import city from './city.jpg'; //better to use png or svg

const RestaurantList = ({restaurants}) => (
  <div className="Home-List">
    <div className="descr-restaurant-list">
      <h3>Yelpdemo is the best way to find reviews on local restaurants.</h3>
      <p>
        Explore the favorite diners pastry shops and eateries in your community.
        <br />Leave reviews and ratings for your fellow foodies.
      </p>
    </div>
    <Table>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Address</TableHeaderColumn>
            <TableHeaderColumn>Phone</TableHeaderColumn>
            <TableHeaderColumn>Website</TableHeaderColumn>
          </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {
          restaurants.map(rest =>
            <RestaurantListItem key={rest.id} restaurant={rest} />
          )
        }
      </TableBody>
    </Table>
    <div className="img">
      <img src={city}/>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  restaurants: Object.values(state.restaurants),
});

export default connect(mapStateToProps)(RestaurantList);
