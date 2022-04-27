import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { weatherReducer } from './weather/weather.reducer.js';

const appReducer = combineReducers({
  weather: weatherReducer,
});

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(appReducer, composedEnhancer(applyMiddleware(thunk)));

export default store;
