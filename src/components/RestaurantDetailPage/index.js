import React, {Component} from 'react';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import './index.css';
import Reviews from '../Reviews';
import GoogleMapReact from 'google-map-react';

const styles = {
	marker: {
		textAlign: 'center',
		backgroundColor: 'red',
	}
};
const Marker = ({ text }) => <div style={styles.marker}>{text}</div>;

class RestaurantDetailPage extends Component {
	render(){
		const {restaurant} = this.props;
		const center = {
			lat: restaurant.lat,
			lng: restaurant.lon,
		};
		const size = {
			width: 250,
			height: 350,
		};

		return(
			<div className="restaurantDetailPage">
				<div className="info">
					<img src={restaurant.img} alt={restaurant.name} height="150"/>
					<p>{restaurant.name}</p>
					<p>* * * * *</p>
					<p>689 reviews</p>
					<p>{restaurant.address}</p>
					<p>{restaurant.phone}</p>
					<p>{restaurant.website}</p>
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

const mapStateToProps = (state, props) => {
	const id = props.match.params.id;

	return {
		restaurant: state.restaurants[id],
	};
};
export default connect(mapStateToProps)(RestaurantDetailPage);
