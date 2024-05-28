// reducers/index.js
import { combineReducers } from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  // other reducers if any
});

export default rootReducer;
