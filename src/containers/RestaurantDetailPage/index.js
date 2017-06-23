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
	info: {
		paddingLeft: 15,
		paddingRight: 15,
	},
	content: {
		paddingLeft: 15,
		paddingRight: 15,
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
				<div className="info" style={styles.info}>
					<img src={restaurant.img} alt={restaurant.name} width="100%"/>
					<p><strong>{restaurant.name}</strong></p>
					<Rating
	          value={calcAverageRating(Object.values(reviews))}
	          max={5}
						readOnly={true}
	        />
					<p>{reviewsSize} reviews</p>
					<p>{restaurant.address}, {restaurant.plz} {restaurant.city}</p>
					<p>{restaurant.phone}</p>
					<p><Link to={'http://' + restaurant.website}>{restaurant.website}</Link></p>
					<RaisedButton
						label="Write a Review"
						backgroundColor="red"
						fullWidth={true}
						labelColor="white"
					/>
					<br />
					<br />
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
				<div className="reviews" style={styles.content}>
					<Reviews restaurant={restaurant} />
				</div>
			</div>
		);
	}
}

export default RestaurantDetailPage;
