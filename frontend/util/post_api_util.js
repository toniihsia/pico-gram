export const fetchPosts = (success, error) => {
  $.ajax({
    type: 'GET',
    url: 'api/posts',
    success,
    error
  });
};

export const fetchPost = (id, success, error) => {
  $.ajax({
    type: 'GET',
    url: `api/posts/${id}`,
    success,
    error
  });
};

export const createPost = (post, success, error) => {
  $.ajax({
    type: 'POST',
    url: 'api/posts',
    data: { post },
    success,
    error
  });
};
