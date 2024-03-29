import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Import the reducer
import reducers from './reducers/combineReducer'; 

// Connect our store to the reducers
export default createStore(reducers, applyMiddleware(thunk));