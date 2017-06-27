import {
	ADD_REVIEW,
	GET_CURRENTUSER,
	LOGOUT_CURRENTUSER
} from '../constants';

//Review
export const addReview = (review) => ({
	type: ADD_REVIEW,
	review,
});

//CurrentUser
export const loginCurrentUser = (user) => {
  return {
    type: GET_CURRENTUSER,
    content: user
  }
}

export const userLogout = () => {
  return { type: LOGOUT_CURRENTUSER }
}

export const checkLogin = ({ email, password }) => (dispatch, getState) => {
	for (let key in getState().users) {
		if (getState().users[key].email === email &&
			getState().users[key].password === password) {
			localStorage.setItem('userToken', getState().users[key].token);
			localStorage.setItem('email', email);
			const action = loginCurrentUser({
				token: getState().users[key].token,
				email: email
			});
			dispatch(action);
			return true;
		}
	}
	console.log("wrong username or password...");
	return false;
}
