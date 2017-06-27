const initialState = {
	1: {
		id: 1,
		firstName: 'Simona',
		lastName: 'Mühlebach',
		email: 'simona@gmail.com',
		password: 'simona',
		token: '12345789qweasdzxc'
	},
  2: {
		id: 2,
		firstName: 'Satuk',
		lastName: 'Bugra',
		email: 'satuk@gmail.com',
		password: 'satuk',
		token: '12345789qweasdzxc'
	},
  3: {
    id: 3,
    firstName: 'Anna',
    lastName: 'Widmer',
    email: 'anna@gmail.com',
    password: 'anna',
		token: '12345789qweasdzxc'
  },
	4: {
		id: 4,
		firstName: 'Miguel',
		lastName: 'Perello',
		email: 'miguel@gmail.com',
		password: 'miguel',
		token: '12345789qweasdzxc'
	},
};

const users = (state=initialState, action) => {
	return state;
};

export default users;
