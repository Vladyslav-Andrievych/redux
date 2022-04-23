import { SET_USER, REMOVE_USER } from './user.actions.js';

const initialState = null;

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case REMOVE_USER:
      return null;
    default:
      return state;
  }
};
