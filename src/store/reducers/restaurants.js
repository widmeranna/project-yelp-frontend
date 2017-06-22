const initialState = {
	1: {
		id: 1,
		name: 'Lilly Jo',
		address: 'Bahnhofstrasse 100',
		phone: '044 555 44 33',
		website: 'www.sbb.ch',
		img: 'https://lh3.googleusercontent.com/-Kn8cF0VandU/VhyyNpp6pxI/AAAAAAAAABM/tMezVGYwqn0/w1664-h1664/profilbild_lilly-jo_400x400.jpg',
		map: 'map',
	},
	2: {
		id: 2,
		name: 'Crazy Burger',
		address: 'Schiffbaustrasse 12',
		phone: '044 555 44 33',
		website: 'www.google.ch',
		img: 'https://lh3.googleusercontent.com/-Kn8cF0VandU/VhyyNpp6pxI/AAAAAAAAABM/tMezVGYwqn0/w1664-h1664/profilbild_lilly-jo_400x400.jpg',
		map: 'map',
	},
};

const restaurants = (state=initialState, action) => {
	return state;
};

export default restaurants;
