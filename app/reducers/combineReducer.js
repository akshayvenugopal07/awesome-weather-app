import { combineReducers } from 'redux';

import homeReducer from './home/homeReducer';
import loginReducer from './login/loginReducer';
import weatherReducer from './weather/weatherReducer';

// Combine all the reducers
const rootReducer = combineReducers({
    homeReducer,
    loginReducer,
    weatherReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
});

export default rootReducer;