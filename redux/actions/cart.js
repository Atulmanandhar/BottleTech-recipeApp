import {ADD_TO_CART, REMOVE_FROM_CART} from './types';

export const addToCartHandler = itemObject => {
  return {
    type: ADD_TO_CART,
    payload: itemObject,
  };
};
export const removeFromCartHandler = itemObject => {
  return {
    type: REMOVE_FROM_CART,
    payload: itemObject,
  };
};
