import {ADD_TO_CART, REMOVE_FROM_CART} from '../actions/types';

const initialState = {
  allCart: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const itemObject = action.payload;
      let newCart;
      // if item already exists in cart, dont do anything else add it to the cart
      const checkIfItemExists = state.allCart.findIndex(
        cartItem => cartItem._id === itemObject._id,
      );
      if (checkIfItemExists >= 0) {
        newCart = [...state.allCart];
      } else {
        newCart = [...state.allCart, itemObject];
      }
      return {...state, allCart: newCart};

    case REMOVE_FROM_CART:
      const itemObj = action.payload;
      // find the index of item object and remove it from the array using splice
      const existingIndex = state.allCart.findIndex(
        cartItem => cartItem._id === itemObj._id,
      );
      let updateCart = [...state.allCart];
      updateCart.splice(existingIndex, 1);

      return {...state, allCart: updateCart};

    default:
      return state;
  }
};
