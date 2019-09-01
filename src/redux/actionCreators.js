import { SET_CURRENT_USER, LIKE_CURRENT_USER, UNLIKE_CURRENT_USER, ADD_COMMENT } from "./constants";

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});

export const likeCurrentUser = (username, photoId) => ({
    type: LIKE_CURRENT_USER,
    payload: { username, photoId }
})

export const unlikeCurrentUser = (username, photoId) => ({
  type: UNLIKE_CURRENT_USER,
  payload: { username, photoId }
});

export const addComment = (username, photoId, comment) => ({
  type: ADD_COMMENT,
  payload: { username, photoId, comment }
});