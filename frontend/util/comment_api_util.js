export const createComment = (comment, success) => {
  $.ajax({
    type: 'POST',
    url: 'api/comments',
    data: {comment},
    success
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
