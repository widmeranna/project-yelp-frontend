import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './index.css';
import Reviews from '../Reviews';
import GoogleMapReact from 'google-map-react';
import { Rating } from 'material-ui-rating';
import { calcAverageRating } from '../../utils';
import { Link } from 'react-router-dom';

const styles = {
	marker: {
		backgroundColor: 'red',
		height: 40,
		width: 40,
		padding: 10,
		borderRadius: 35,
		textAlign: 'center',
	},
	span: {
		color: 'white',
		fontSize: 13,
	},
};
const Marker = ({ text }) => <div style={styles.marker}><span style={styles.span}>{text}</span></div>;


class RestaurantDetailPage extends Component {
	render(){
		const {restaurant} = this.props;
		const {reviews} = this.props;
		const reviewsSize = Object.keys(reviews).length;
		const center = {
			lat: restaurant.lat,
			lng: restaurant.lon,
		};

		return(
			<div className="restaurantDetailPage">
				<div className="info">
					<img src={restaurant.img} alt={restaurant.name} height="150"/>
					<p>{restaurant.name}</p>
					<Rating
	          value={calcAverageRating(Object.values(reviews))}
	          max={5}
						readOnly={true}
	        />
					<p>{reviewsSize} reviews</p>
					<p>{restaurant.address}</p>
					<p>{restaurant.phone}</p>
					<p><Link to={'http://' + restaurant.website}>{restaurant.website}</Link></p>
					<RaisedButton label="Write a Review"></RaisedButton>

					<GoogleMapReact
						defaultZoom={14}
						defaultCenter={center}
					>
						<Marker
		          lat={restaurant.lat}
		          lng={restaurant.lon}
		          text={restaurant.name}
		        />
					</GoogleMapReact>

				</div>
				<div className="reviews">
					<Reviews restaurant={restaurant} />
				</div>
			</div>
		);
	}
}

export default RestaurantDetailPage;
