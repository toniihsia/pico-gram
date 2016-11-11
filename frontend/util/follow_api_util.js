export const createFollow = (follow, success) => {
  $.ajax({
    type: 'POST',
    url: 'api/follows',
    data: {follow},
    success
  });
};

export const deleteFollow = (id, success) => {
  $.ajax({
    type: 'DELETE',
    url: `api/follows/${id}`,
    data: id,
    success
  });
};
