import React, {Component} from 'react';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import './index.css';
import Reviews from '../Reviews';

class RestaurantDetailPage extends Component {
	render(){
		const {restaurant} = this.props;

		return(
			<div className="restaurantDetailPage">
				<div className="info">
					<img src={restaurant.img} alt={restaurant.name} height="150"/>
					<p>{restaurant.name}</p>
					<p>* * * * *</p>
					<p>689 Reviews</p>
					<p>{restaurant.address}</p>
					<p>{restaurant.phone}</p>
					<p>{restaurant.website}</p>
					<RaisedButton label="Write a Review"></RaisedButton>
					<p>{restaurant.map}</p>
				</div>
				<div className="reviews">
					<Reviews restaurant={restaurant} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	const id = props.match.params.id;

	return {
		restaurant: state.restaurants[id],
	};
};
export default connect(mapStateToProps)(RestaurantDetailPage);
