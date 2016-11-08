export const CREATE_COMMENT = "CREATE_COMMENT";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

export const createComment = (comment) => ({
  type: CREATE_COMMENT,
  comment
});

export const removeComment = (id) => ({
  type: DELETE_COMMENT,
  id
});

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});
