import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import './index.css';

class RestaurantList extends Component {
  render(){
    return(
      <div className="Home-List">
        <div className="descr-restaurant-list">
          <h3>Yelpdemo is the best way to find reviews on local restaurants.</h3>
          <p> Explore the favorite diners pastry shops and eateries in your community. <br></br>Leave reviews and ratings for your fellow foodies. </p>
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
            <TableRow>
              <TableRowColumn>Panera Bread</TableRowColumn>
              <TableRowColumn>201 Brookline Avenue, Boston, MA 02215</TableRowColumn>
              <TableRowColumn>(617)-247-0174</TableRowColumn>
              <TableRowColumn>http://www.panerabread.com</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    )
  }
}

export default RestaurantList;
