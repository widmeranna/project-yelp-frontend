import React from 'react';
import { connect } from 'react-redux';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';
import RestaurantListItem from '../RestaurantListItem';

const RestaurantList = (props) => {
	const {restaurants} = props;

	return(
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
	);
}

const mapStateToProps = (state) => ({
  restaurants: Object.values(state.restaurants),
});

export default connect(mapStateToProps)(RestaurantList);
