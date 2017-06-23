import React, {Component} from 'react';
import {connect} from 'react-redux';
import NewReviewComponent from '../../containers/NewReview';

class NewReview extends Component {
	render(){

		console.log(this.props);

		return(
			<NewReviewComponent />
		);
	}
}

export default connect()(NewReview);
