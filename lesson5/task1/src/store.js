import { createStore } from 'redux';
import { usersReducer } from './users/users.reducer.js';

const store = createStore(usersReducer);

export default store;
