import { SET_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return action.payload;
    default:
      return state;
  }
};