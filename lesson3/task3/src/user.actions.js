export const SET_USER = 'USER/SET';
export const REMOVE_USER = 'USER/REMOVE';

export const setUser = (user) => ({
  type: SET_USER,
  payload: {
    ...user,
  },
});

export const removeUser = () => ({
  type: REMOVE_USER,
});
