import React from 'react';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const RestaurantListItem = (props) => {
	const {restaurant} = props;
	return(
		<TableRow>
			<TableRowColumn>{restaurant.name}</TableRowColumn>
			<TableRowColumn>{restaurant.address}</TableRowColumn>
			<TableRowColumn>{restaurant.phone}</TableRowColumn>
			<TableRowColumn><a href={"http://"+restaurant.website} target="_blank" >{restaurant.website}</a></TableRowColumn>

		</TableRow>
	);
};

export default RestaurantListItem;
