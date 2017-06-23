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


const headerStyle = {
  fontWeight:'bold',
  fontSize: 14,
}

const RestaurantList = ({restaurants}) => (
  <div className="Home-List">
    <div className="descr-restaurant-list">
      <h3>Yelpdemo is the best way to find reviews on local restaurants.</h3>
      <p>Explore the favorite diners pastry shops and eateries in your community. Leave reviews and ratings for your fellow foodies.</p>
    </div>
    <Table>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow >
          <TableHeaderColumn style={headerStyle}>Name</TableHeaderColumn>
          <TableHeaderColumn style={headerStyle}>Address</TableHeaderColumn>
          <TableHeaderColumn style={headerStyle}>Phone</TableHeaderColumn>
          <TableHeaderColumn style={headerStyle}>Website</TableHeaderColumn>
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
      <img src={city} alt="Skyline" />
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  restaurants: Object.values(state.restaurants),
});

export default connect(mapStateToProps)(RestaurantList);
