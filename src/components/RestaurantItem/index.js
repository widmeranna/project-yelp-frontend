import React from 'react';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const RestaurantItem = ({restaurant}) => (
	<TableRow>
		<TableRowColumn>{restaurant.name}</TableRowColumn>
		<TableRowColumn>{restaurant.address}</TableRowColumn>
		<TableRowColumn>{restaurant.phone}</TableRowColumn>
		<TableRowColumn>{restaurant.website}</TableRowColumn>
	</TableRow>
);

export default RestaurantItem;
