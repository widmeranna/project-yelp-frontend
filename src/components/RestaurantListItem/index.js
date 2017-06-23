import React from 'react';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { Link } from 'react-router-dom';

const RestaurantListItem = (props) => {
	const {restaurant} = props;
	return(
		<TableRow>
			<TableRowColumn><Link to={'restaurants/' + restaurant.id}>{restaurant.name}</Link></TableRowColumn>
			<TableRowColumn>{restaurant.address}</TableRowColumn>
			<TableRowColumn>{restaurant.phone}</TableRowColumn>
			<TableRowColumn><a href={"http://"+restaurant.website} target="_blank" rel="noopener noreferrer">{restaurant.website}</a></TableRowColumn>

		</TableRow>
	);
};

export default RestaurantListItem;
