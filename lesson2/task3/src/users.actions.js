export const DELETE = 'USERS/DELETE_USER';
export const ADD = 'USERS/ADD_USER';

export const addUser = (userDataObj) => ({
  type: ADD,
  payload: userDataObj,
});

export const deleteUser = (userId) => ({
  type: DELETE,
  payload: userId,
});
