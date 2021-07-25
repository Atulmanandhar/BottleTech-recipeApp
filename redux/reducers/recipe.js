import {GET_RECIPE, FILTER_RECIPE} from '../actions/types';
import {fitlerHelper, removeDuplicateHelper} from '../../helpers/ArrayHelpers';

//create a copy of the recipeData as copyAllRecipe during getApi call
//so we only change the allRecipe value during filtering process and use it to render the UI
const initialState = {allRecipe: [], copyAllRecipe: []};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPE:
      return {allRecipe: action.payload, copyAllRecipe: action.payload};

    case FILTER_RECIPE:
      const {capsicumFilter, onionFilter, saltFilter} = action.payload;
      let tempArray = [];
      let tempCapsicumArray = [];
      let tempOnionArray = [];
      let tempSaltArray = [];

      if (!capsicumFilter && !onionFilter && !saltFilter) {
        tempArray = [...state.copyAllRecipe];
      }

      if (capsicumFilter) {
        tempCapsicumArray = fitlerHelper(state.copyAllRecipe, 'capsicum');
      }
      if (onionFilter) {
        tempOnionArray = fitlerHelper(state.copyAllRecipe, 'onion');
      }
      if (saltFilter) {
        tempSaltArray = fitlerHelper(state.copyAllRecipe, 'salt');
      }
      

      tempArray = [
        ...tempArray,
        ...tempCapsicumArray,
        ...tempOnionArray,
        ...tempSaltArray,
      ];
      //tempArray might contain duplicate objects
      //remove duplicate objects from the array using the helper function
      const finalArray = removeDuplicateHelper(tempArray);
      return {...state, allRecipe: finalArray};

    default:
      return state;
  }
};
