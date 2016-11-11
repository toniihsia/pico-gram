export const CREATE_FOLLOW = "CREATE_FOLLOW";
export const DELETE_FOLLOW = "DELETE_FOLLOW";
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

export const createFollow = (follow) => ({
  type: CREATE_FOLLOW,
  follow
});

export const deleteFollow = (id) => ({
  type: DELETE_FOLLOW,
  id
});

export const receiveFollow = (follow) => ({
  type: RECEIVE_FOLLOW,
  follow
});

export const removeFollow = (follow) => ({
  type: REMOVE_FOLLOW,
  follow
});
