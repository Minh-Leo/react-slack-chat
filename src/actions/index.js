import { SET_USER, CLEAR_USER, SET_CURRENT_CHANNEL } from './types';

// Users
export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: {
      currentUser: user,
    },
  };
};

export const clearUser = () => {
  return {
    type: CLEAR_USER,
  };
};

// Channels
export const setCurrentChannel = (channel) => {
  return {
    type: SET_CURRENT_CHANNEL,
    payload: {
      currentChannel: channel,
    },
  };
};
