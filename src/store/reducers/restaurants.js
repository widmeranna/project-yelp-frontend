const initialState = {
	1: {
		id: 1,
		name: 'Lilly Jo',
		address: 'Pfingstweidstrasse 16',
		plz: '8005',
		city: 'Zürich',
		phone: '044 555 44 33',
		website: 'www.lilliyo.ch',
		img: 'https://lh3.googleusercontent.com/-Kn8cF0VandU/VhyyNpp6pxI/AAAAAAAAABM/tMezVGYwqn0/w1664-h1664/profilbild_lilly-jo_400x400.jpg',
		lat: '47.3882913',
		lon: '8.5175432',
	},
	2: {
		id: 2,
		name: 'Sternen Grill',
		address: 'Theaterstrasse 22',
		plz: '8001',
		city: 'Zürich',
		phone: '044 555 44 33',
		website: 'www.sternengrill.ch',
		img: 'https://lh3.googleusercontent.com/-Kn8cF0VandU/VhyyNpp6pxI/AAAAAAAAABM/tMezVGYwqn0/w1664-h1664/profilbild_lilly-jo_400x400.jpg',
		lat: '47.3672988',
		lon: '8.5456165',
	},
};

const restaurants = (state=initialState, action) => {
	return state;
};

export default restaurants;
