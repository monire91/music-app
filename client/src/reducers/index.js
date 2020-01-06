import counterReducer from './counter';
import loggedReducer from './isSigned';

import alertReducer from './alert';

import { combineReducers } from 'redux';

const combinedReducer = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    alertReducer
});

export default combinedReducer;