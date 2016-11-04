import {
  receiveAllPosts,
  receivePost,
  FETCH_POSTS,
  FETCH_POST,
  CREATE_POST
} from '../actions/post_actions';

import { fetchPosts, fetchPost, createPost } from '../util/post_api_util';


const PostsMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  let error = (e) => console.log(e.responseJSON);
  let receiveAllPostsSuccess = (posts) => dispatch(receiveAllPosts(posts));
  let receivePostSuccess = (post) => dispatch(receivePost(post));

  switch(action.type) {
    case FETCH_POSTS:
      fetchPosts(receiveAllPostsSuccess);
      return next(action);
    case FETCH_POST:
      fetchPost(action.id, receivePostSuccess);
      return next(action);
    case CREATE_POST:
      createPost(action.post, receivePostSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default PostsMiddleware;
