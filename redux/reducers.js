import actionTypes from './types';
import { combineReducers } from 'redux';
const initialState = {
  messages: {},
  matches: []
};

// REDUCERS
const gdax = (state = initialState, action) => {
  var matchesQueue = state.matches;
  switch (action.type) {
    case actionTypes.GET_MESSAGES:
      return Object.assign({}, state, { messages: action.payload });
    case actionTypes.GET_MATCH:
      matchesQueue.unshift(action.payload);
      return Object.assign({}, state, { matches: matchesQueue });
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  gdax
})


export default rootReducer;