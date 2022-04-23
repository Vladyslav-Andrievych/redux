import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions.js';

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: state.products.concat(action.payload),
      };
    case REMOVE_PRODUCT: {
      const newProductsList = state.products.filter(
        (product) => product.id !== action.payload
      );

      return {
        ...state,
        products: newProductsList,
      };
    }
    default:
      return state;
  }
};
