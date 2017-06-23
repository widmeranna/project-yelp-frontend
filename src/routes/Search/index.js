import React, {Component} from 'react';
import {connect} from 'react-redux';
import RestaurantList from '../../components/RestaurantList';

class Search extends Component {
	constructor(props){
		super(props);

		this.state = {
			restaurants: {},
		};
	}

	componentDidMount(){
		// fetch
		// fill the state
	}

	render(){
		return(
			// <RestaurantList restaurants={this.state.restaurants}/>
			<RestaurantList />
		);
	}
}



export default connect()(Search);
