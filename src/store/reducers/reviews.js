const initialState = {
	1: {
		id: 1,
		firstName: 'Satuk',
		lastName: 'Kolan',
		date: '6/9/2017',
		rating: 4,
		text: 'very very good food',
	},
	2: {
		id: 2,
		firstName: 'Anna',
		lastName: 'Widmer',
		date: '6/9/2017',
		rating: 2,
		text: 'very very goood goood good food',
	},
	3: {
		id: 3,
		firstName: 'Karsten',
		lastName: 'UndKarsten',
		date: '6/9/2017',
		rating: 3,
		text: 'very very very very very good food',
	},
}

const reviews = (state=initialState, action) => {
	return state;
};

export default reviews;
