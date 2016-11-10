export const createLike = (like, success, error) => {
  $.ajax({
    type: 'POST',
    url: 'api/likes',
    data: {like},
    success
  });
};

export const deleteLike = (id, success) => {
  $.ajax({
    type: 'DELETE',
    url: `api/likes/${id}`,
    data: id,
    success
  });
};
