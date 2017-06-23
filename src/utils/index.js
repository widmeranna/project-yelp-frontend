export const calcAverageRating = (arr) => (
	arr.reduce((acc, review) => acc + review.rating, 0) / arr.length
);
