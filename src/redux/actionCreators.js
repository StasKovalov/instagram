import { SET_CURRENT_USER, LIKE_CURRENT_USER, UNLIKE_CURRENT_USER } from "./constants";

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});

export const likeCurrentUser = (user, id) => ({
  type: LIKE_CURRENT_USER,
  payload: {user, id}
});

export const unlikeCurrentUser = (user, id) => ({
  type: UNLIKE_CURRENT_USER,
  payload: { user, id }
});