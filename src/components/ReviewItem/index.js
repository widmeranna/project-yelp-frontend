import React from 'react';
import './index.css';

const ReviewItem = ({review}) => {
	return (
		<div className="reviewItem">
			<div className="reviewName">
				<p>{review.firstName}</p>
				<p>{review.date}</p>
			</div>
			<div className="reviewContent">
				<p>{review.rating}</p>
				<p>{review.text}</p>
			</div>
		</div>
	);
};


export default ReviewItem;
