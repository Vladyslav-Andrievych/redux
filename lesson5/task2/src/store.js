import { createStore, combineReducers } from 'redux';
import { optionsReducer } from './options/options.reducer.js';

const appReducer = combineReducers({
  options: optionsReducer,
});

const store = createStore(appReducer);

export default store;
