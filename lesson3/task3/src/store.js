import { createStore, combineReducers } from 'redux';
import { userReducer } from './user.reducer.js';
import { productReducer } from './cart.reducer.js';
import { languageReducer } from './language.reducer.js';

const appReducer = combineReducers({
  language: languageReducer,
  user: userReducer,
  cart: productReducer,
});

const store = createStore(appReducer);

export default store;
