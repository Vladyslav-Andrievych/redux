import { fetchWeatherData } from './weather.gateway.js';

export const RECEIVED_CITIES_LIST = 'RECEIVED_CITIES_LIST';

export const receivedWeatherData = (citiesList) => ({
  type: RECEIVED_CITIES_LIST,
  payload: {
    citiesList,
  },
});

export const getWeatherData = () => {
  return function (dispatch) {
    fetchWeatherData().then((citiesList) =>
      dispatch(receivedWeatherData(citiesList))
    );
  };
};
