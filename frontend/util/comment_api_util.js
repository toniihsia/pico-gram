export const createComment = (comment, success) => {
  $.ajax({
    type: 'POST',
    url: 'api/comments',
    data: {comment},
    success
  });
};

export const deleteComment = (comment, success) => {
  $.ajax({
    type: 'DELETE',
    url: `api/comments/${comment.id}`,
    success
  });
};
