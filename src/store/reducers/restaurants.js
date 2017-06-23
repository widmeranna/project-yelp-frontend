const initialState = {
	1: {
		id: 1,
		name: 'Lilly Jo',
		address: 'Pfingstweidstrasse 16',
		plz: '8005',
		city: 'Zürich',
		phone: '044 555 44 33',
		website: 'www.lillyjo.ch/',
		img: 'https://lh3.googleusercontent.com/-Kn8cF0VandU/VhyyNpp6pxI/AAAAAAAAABM/tMezVGYwqn0/w1664-h1664/profilbild_lilly-jo_400x400.jpg',
		lat: 47.3882913,
		lon: 8.5175432,
	},
	2: {
		id: 2,
		name: 'Sternen Grill',
		address: 'Theaterstrasse 22',
		plz: '8001',
		city: 'Zürich',
		phone: '044 555 44 33',
		website: 'http://www.sternengrill.ch/',
		img: 'https://static1.squarespace.com/static/5773706d725e2586791f8c68/t/585240082994ca7a625c3609/1481785361472/sternengrill.png',
		lat: 47.3672988,
		lon: 8.5456165,
	},
	3: {
		id: 3,
		name: 'Restaurant Manora',
		address: 'Bahnhofstrasse 33',
		plz: '8001',
		city: 'Zürich',
		phone: '044 333 44 33',
		website: 'www.manora.ch',
		img: 'https://prozentbuch4.imgix.net/tl_files/pro100/wp/2016/basel/gastronomie/manora.13871_16/logo/Manora.png',
		lat: 47.3672988,
		lon: 8.5456165,
	},
	4: {
		id: 4,
		name: 'Aya Bar',
		address: 'Bahnhofstrasse 22',
		plz: '8001',
		city: 'Zürich',
		phone: '044 555 22 11',
		website: 'www.aya-bar.ch',
		img: 'http://www.superdesign.ch/wp-content/uploads/aya-bar/aya-door.jpg',
		lat: 47.3672988,
		lon: 8.5456165,
	},
	5: {
		id: 5,
		name: 'Five Spices',
		address: 'Badenerstrasse 122',
		plz: '8001',
		city: 'Zürich',
		phone: '044 999 45 66',
		website: 'www.fivespices.ch',
		img: 'https://s-media-cache-ak0.pinimg.com/originals/e1/ae/b6/e1aeb6916208f1a9098a00d367c84289.png',
		lat: 47.3672988,
		lon: 8.5456165,
	},
};

const restaurants = (state=initialState, action) => {
	return state;
};

export default restaurants;
