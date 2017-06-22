import {combineReducers} from 'redux';
import restaurants from './restaurants';
import reviews from './reviews';


const reducer = combineReducers({
  restaurants,
  reviews,
});

export default reducer;
