import React from 'react';
import './index.css';
import { Rating } from 'material-ui-rating';

const ReviewItem = ({review}) => {
	return (
		<div className="reviewItem">
			<div className="reviewName">
				<p>{review.firstName}</p>
				<p>{review.date}</p>
			</div>
			<div className="reviewContent">
				<Rating
					value={review.rating}
					max={5}
					readOnly={true}
				/>
				<p>{review.text}</p>
			</div>
		</div>
	);
};


export default ReviewItem;
