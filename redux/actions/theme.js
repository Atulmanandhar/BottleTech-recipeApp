import {SWITCH_THEME} from './types';

export const SwitchThemeHandler = theme => {
  return {
    type: SWITCH_THEME,
    theme: theme,
  };
};
