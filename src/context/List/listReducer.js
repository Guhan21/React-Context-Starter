import { SET_LIST } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_LIST:
      return action.payload;
    default:
      return state;
  }
};
