import { SET_LANGUAGE } from './language.actions.js';

const initialState = 'en';

export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
};
