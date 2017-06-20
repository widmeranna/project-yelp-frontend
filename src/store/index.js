import { createStore, applyMiddleware } from 'redux'; // check we also require `applyMiddleware`
import thunk from 'redux-thunk'; // require the Middleware
import reducer from './reducers';


const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

export default store;
