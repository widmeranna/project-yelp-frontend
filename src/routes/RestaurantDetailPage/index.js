import React, {Component} from 'react';
import {connect} from 'react-redux';
import RestaurantDetailPageComponent from '../../containers/RestaurantDetailPage';

class RestaurantDetailPage extends Component {
	render(){
		return(
			<RestaurantDetailPageComponent restaurant={this.props.restaurant} reviews={this.props.reviews}/>
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
