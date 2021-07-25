import {GET_RECIPE, FILTER_RECIPE} from '../actions/types';
// import {lightTheme, darkTheme} from "../../constants"

const initialState = {allRecipe: [], copyAllRecipe: []};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPE:
      // return {allRecipe: []};
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
        tempCapsicumArray = filterHelperFunction(
          state.copyAllRecipe,
          'capsicum',
        );
      }
      if (onionFilter) {
        tempOnionArray = filterHelperFunction(state.copyAllRecipe, 'onion');
      }
      if (saltFilter) {
        tempSaltArray = filterHelperFunction(state.copyAllRecipe, 'salt');
      }

      tempArray = [
        ...tempArray,
        ...tempCapsicumArray,
        ...tempOnionArray,
        ...tempSaltArray,
      ];
      const seen = new Set();

      const filteredArr = tempArray.filter(element => {
        const duplicate = seen.has(element._id);
        seen.add(element.id);
        return !duplicate;
      });
      return {...state, allRecipe: filteredArr};

    default:
      return state;
  }
};

const filterHelperFunction = (arrayData, filterName) => {
  const unsanitizedArray = arrayData.map(item => {
    let a = item.ingredients.filter(i => {
      if (i.name.toLowerCase().includes(filterName)) {
        return true;
      } else {
        return false;
      }
    });
    if (a.length > 0) {
      return item;
    }
  });
  const sanitizedArray = unsanitizedArray.filter(item => item !== undefined);
  return sanitizedArray;
};
