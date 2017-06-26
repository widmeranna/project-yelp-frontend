const initialState = {
	1: {
		id: 1,
		firstName: 'Simona',
		lastName: 'Mühlebach',
		email: 'simona@gmail.com',
		password: 'simona',
	},
  2: {
		id: 2,
		firstName: 'Satuk',
		lastName: 'Bugra',
		email: 'satuk@gmail.com',
		password: 'satuk',
	},
  3: {
    id: 3,
    firstName: 'Anna',
    lastName: 'Widmer',
    email: 'anna@gmail.com',
    password: 'anna',
  },
};

const users = (state=initialState, action) => {
	return state;
};

export default users;
