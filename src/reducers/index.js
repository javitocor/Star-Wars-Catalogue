import { combineReducers } from 'redux';
import authReducer from './authoritation';
import itemReducer from './items';

const rootReducer = combineReducers({
  auth: authReducer,
  items: itemReducer,
});

export default rootReducer;