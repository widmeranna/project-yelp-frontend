import {combineReducers} from 'redux';
import restaurants from './restaurants';
import reviews from './reviews';
import users from './users';

const reducer = combineReducers({
  restaurants,
  reviews,
  users,
});

export default reducer;
