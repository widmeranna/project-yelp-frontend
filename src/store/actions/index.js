import {
	ADD_REVIEW,
} from '../constants';

export const addReview = (review) => ({
	type: ADD_REVIEW,
	review,
});
