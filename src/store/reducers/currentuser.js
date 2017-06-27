import { GET_CURRENTUSER, LOGOUT_CURRENTUSER} from '../constants';

const initialUser = {
  "token": "",
  "email": ""
};

const currentuser = (state = initialUser, action) => {
  switch (action.type) {

    case GET_CURRENTUSER:
      const newState = { ...state }
      newState.token = action.content.token;
      newState.email = action.content.email;
      return newState;

    case LOGOUT_CURRENTUSER:
      return {
        "token": null,
        "email": null
      };

    default:
      return state;
  }
}

export default currentuser;
