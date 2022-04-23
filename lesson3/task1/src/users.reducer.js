import { ADD_USER, DELETE_USER, UPDATE_USER } from './users.actions.js';

const initialValue = {
  usersList: [],
};

export const usersReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: state.usersList.concat(action.payload),
      };
    case DELETE_USER: {
      const newList = state.usersList.filter(
        (user) => user.id !== action.payload
      );

      return {
        ...state,
        usersList: newList,
      };
    }
    case UPDATE_USER: {
      const newList = state.usersList.map((user) => {
        if (user.id === action.payload.userId) {
          return {
            ...user,
            ...action.payload.userData,
          };
        }

        return user;
      });

      return {
        ...state,
        usersList: newList,
      };
    }
    default:
      return state;
  }
};
