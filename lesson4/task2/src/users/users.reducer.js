import { ADD_USER, DELETE_USER } from './users.actions.js';

const initialState = {
  users: {
    usersList: [],
  },
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: {
          ...state.users,
          usersList: state.users.usersList.concat(action.payload.userData),
        },
      };
    case DELETE_USER:
      const newList = state.users.usersList.filter(
        (user) => user.id !== action.payload.userId
      );

      return {
        ...state,
        users: {
          ...state.users,
          usersList: newList,
        },
      };
    default:
      return state;
  }
};
