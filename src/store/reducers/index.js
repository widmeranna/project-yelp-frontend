import {combineReducers} from 'redux';
import restaurants from './restaurants';
import reviews from './reviews';
import users from './users';
import currentuser from './currentuser'

const reducer = combineReducers({
  restaurants,
  reviews,
  users,
  currentuser
});

export default reducer;
