import {SET_USER} from '../actions/types';
const initialState = {userLoggedIn: true};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {userLoggedIn: action.payload};

    default:
      return state;
  }
};
