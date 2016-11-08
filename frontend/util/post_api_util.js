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
  let post2 = Object.assign({}, post, {caption: 'random caption'});
  console.log(post2);
  $.ajax({
    type: 'POST',
    url: 'api/posts',
    data: {
      post: post2
    },
    success,
    error
  });
};
