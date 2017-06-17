import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const initialState = {
  auther: 'andy'
};

export const actionTypes = {
  CHANGE_NAME: 'CHANGE_NAME'
};

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_NAME:
      return Object.assign({}, state, { auther: action.auther });
    default:
      return state;
  }
};

// ACTIONS
export const changeName = name => dispatch => {
  return dispatch({ type: actionTypes.CHANGE_NAME, auther: name });
};

export const initStore = (initialState = initialState) => {
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware));
};
