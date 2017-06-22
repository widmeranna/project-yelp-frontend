import {combineReducers} from 'redux';
import restaurants from './restaurants';

const reducer = combineReducers({
  restaurants,
});

export default reducer;
