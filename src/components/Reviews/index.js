import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReviewItem from '../ReviewItem';

class Reviews extends Component {
	render(){
		const {reviews} = this.props;

		return (
			<div>
				{
					reviews.map(review =>
						<ReviewItem review={review} key={review.id}/>
					)
				}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	reviews: Object.values(state.reviews),
});

export default connect(mapStateToProps)(Reviews);
