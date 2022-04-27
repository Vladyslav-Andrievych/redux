import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { usersReducer } from './users/users.reducer.js';

const appReducer = combineReducers({
  users: usersReducer,
});

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('new state', store.getState());
  console.groupEnd();
  return result;
};

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  appReducer,
  composedEnhancer(applyMiddleware(thunk, logger))
);

export default store;
