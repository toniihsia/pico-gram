export const fetchProfile = (id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/users/${id}`,
    data: id,
    success,
    error
  });
};
