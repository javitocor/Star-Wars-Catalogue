import { combineReducers } from 'redux';
import authReducer from './authorization';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;