import {
  receiveAllPosts,
  receivePost,
  FETCH_POSTS,
  FETCH_POST,
  CREATE_POST
} from '../actions/post_actions';

import { fetchPosts, fetchPost, createPost } from '../util/post_api_util';

import {
  CREATE_COMMENT,
  DELETE_COMMENT,
  REMOVE_COMMENT,
  createComment,
  deleteComment,
  removeComment
} from '../actions/comment_actions';


const PostsMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  let error = (e) => console.log(e.responseJSON);
  let receiveAllPostsSuccess = (posts) => dispatch(receiveAllPosts(posts));
  let receivePostSuccess = (post) => dispatch(receivePost(post));

  // let deleteCommentSuccess = (comment) => dispatch(removeComment(comment));

  switch(action.type) {
    case FETCH_POSTS:
      fetchPosts(receiveAllPostsSuccess, error);
      return next(action);
    // case FETCH_POST:
    //   fetchPost(action.id, receivePostSuccess, error);
    //   return next(action);
    case CREATE_POST:
      createPost(action.post, receivePostSuccess, error);
      return next(action);
    case CREATE_COMMENT:
      debugger
      createComment(action.comment, receivePostSuccess);
      return next(action);
    case DELETE_COMMENT:
      debugger
      deleteComment(action.id, receivePostSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default PostsMiddleware;
