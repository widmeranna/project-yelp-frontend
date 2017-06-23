import React, {Component} from 'react';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import './index.css';
import Reviews from '../Reviews';
import { Rating } from 'material-ui-rating';
import { calcAverageRating } from '../../utils';
import { Link } from 'react-router-dom';

class RestaurantDetailPage extends Component {
	render(){
		const {restaurant} = this.props;
		const {reviews} = this.props;
		const reviewsSize = Object.keys(reviews).length;

		return(
			<div className="restaurantDetailPage">
				<div className="info">
					<img src={restaurant.img} alt={restaurant.name} height="150"/>
					<p>{restaurant.name}</p>
					<Rating
	          value={calcAverageRating(Object.values(reviews))}
	          max={5}
	          // onChange={(value) => console.log(`Rated with value ${value}`)}
						readOnly={true}
	        />
					<p>{reviewsSize} reviews</p>
					<p>{restaurant.address}</p>
					<p>{restaurant.phone}</p>
					<p><Link to={'http://' + restaurant.website}>{restaurant.website}</Link></p>
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
		reviews: state.reviews,
	};
};
export default connect(mapStateToProps)(RestaurantDetailPage);
