import { RECEIVED_CITIES_LIST } from './weather.actions.js';

const initialState = {
  citiesList: null,
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVED_CITIES_LIST:
      return {
        ...state,
        citiesList: action.payload.citiesList,
      };
    default:
      return state;
  }
};
