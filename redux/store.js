import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

export const store = (initialState) => createStoreWithMiddleware(rootReducer, initialState, applyMiddleware(thunkMiddleware));
