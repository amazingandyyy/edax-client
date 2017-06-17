import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'

import auth from './auth_reducer';
import gdax from './gdax_reducer'
const rootReducer = combineReducers({
  form,
  auth,
  gdax
});

export default rootReducer;
