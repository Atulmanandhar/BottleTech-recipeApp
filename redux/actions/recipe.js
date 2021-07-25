import {GET_RECIPE, FILTER_RECIPE} from './types';
import * as api from '../api';

export const createRecipeHandler = (data, handleCallback) => async dispatch => {
  try {
    const response = await api.apiCreateRecipe(data);
    alert('succcessfully added the reciepe :)');
    handleCallback('success');
  } catch (e) {
    alert(e.response ? e.response.data.message : e.message);
    handleCallback('failure');
  }
};

export const getRecipeHandler =
  (callback = () => {}) =>
  async dispatch => {
    try {
      const {
        data: {data},
      } = await api.apiGetRecipe();
      dispatch({type: GET_RECIPE, payload: data});
      callback();
    } catch (e) {
      alert(e.response ? e.response.data.message : e.message);
      callback();
    }
  };

//payload = object of boolean values of onionFilter,capsicumFilter and saltFilter
export const filterRecipeHandler = payload => {
  return {
    type: FILTER_RECIPE,
    payload: payload,
  };
};
