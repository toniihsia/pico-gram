export const FETCH_POSTS = "FETCH_POSTS";
export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const FETCH_POST = "FETCH_POST";
export const RECEIVE_POST = "RECEIVE_POST";
export const CREATE_POST = "CREATE_POST";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const fetchPosts = () => ({
  type: FETCH_POSTS,
});

export const fetchPost = (id) => ({
  type: FETCH_POST,
  id
});

export const createPost = (post) => ({
  type: CREATE_POST,
  post
});

export const receiveAllPosts = (posts) => ({
  type: RECEIVE_ALL_POSTS,
  posts
});

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
