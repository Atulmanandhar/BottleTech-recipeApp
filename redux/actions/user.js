import {SET_USER} from './types';

export const setUserHandler = (userStatus) => {
  return {
    type: SET_USER,
    payload: userStatus,
  };
};
