import { getUserData } from './users.gateway.js';

export const SHOW_SPINNER = 'SHOW_SPINNER';
export const USER_DATA_RECEIVED = 'USER_DATA_RECEIVED';

export const showSpinner = () => ({
  type: SHOW_SPINNER,
});

export const userDataReceived = (userData) => ({
  type: USER_DATA_RECEIVED,
  payload: {
    userData,
  },
});

export const fetchUserData = (userId) => {
  return function (dispatch, getState) {
    dispatch(showSpinner());

    getUserData(userId).then((userData) => {
      dispatch(userDataReceived(userData));
    });
  };
};
