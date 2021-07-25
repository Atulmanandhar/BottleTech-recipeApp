import {SWITCH_THEME} from './types';

export const SwitchThemeHandler = theme => async dispatch => {
  dispatch({
    type: SWITCH_THEME,
    theme: theme,
  });
};
