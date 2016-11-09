export const createComment = (comment, success, error) => {
  $.ajax({
    type: 'POST',
    url: 'api/comments',
    data: {comment},
    success,
    error
  });
};

export const deleteComment = (id, success) => {
  $.ajax({
    type: 'DELETE',
    url: `api/comments/${id}`,
    data: id,
    success
  });
};
