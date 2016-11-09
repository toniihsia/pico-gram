export const CREATE_LIKE = "CREATE_LIKE";
export const DELETE_LIKE = "DELETE_LIKE";

export const createLike = (like) => ({
  type: CREATE_LIKE,
  like
});

export const deleteLike = (id) => ({
  type: DELETE_LIKE,
  id
});
