import {
	ADD_REVIEW,
} from '../constans';

export const addReview = (review) => ({
	type: ADD_REVIEW,
	review,
});
