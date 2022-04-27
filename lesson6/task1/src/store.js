import { createStore, applyMiddleware } from 'redux';
import { counterReducer } from './counter.reducer.js';

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('new state', store.getState());
  console.groupEnd();
  return result;
};

const store = createStore(counterReducer, applyMiddleware(logger));

export default store;
