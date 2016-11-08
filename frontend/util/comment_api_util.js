export const createComment = (comment, success) => {
  $.ajax({
    type: 'POST',
    url: 'api/comments',
    data: {comment},
    success
  });
};

export const removeComment = (id, success) => {
  $.ajax({
    type: 'DELETE',
    url: `api/comments/${id}`,
    success
  });
};
