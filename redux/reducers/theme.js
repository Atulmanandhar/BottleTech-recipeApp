import {SWITCH_THEME} from '../actions/types';
// import {lightTheme, darkTheme} from "../../constants"
import {lightTheme, darkTheme} from '../../constants/Theme';

const initialState = {theme: darkTheme};

export default (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      return {theme: action.theme};

    default:
      return state;
  }
};
