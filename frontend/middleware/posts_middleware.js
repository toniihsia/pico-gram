import {
  receiveAllPosts,
  receivePost,
  FETCH_POSTS,
  FETCH_POST,
  CREATE_POST
} from '../actions/post_actions';
import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/comment_actions';
import { CREATE_LIKE, DELETE_LIKE } from '../actions/like_actions';

import { fetchPosts, fetchPost, createPost } from '../util/post_api_util';
import { createLike, deleteLike } from '../util/like_api_util';
import { createComment, deleteComment } from '../util/comment_api_util';
import { receiveCurrentUser } from '../actions/session_actions';


const PostsMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  let error = (e) => console.log(e.responseJSON);
  let receiveAllPostsSuccess = (posts) => dispatch(receiveAllPosts(posts));
  let receivePostSuccess = (id) => dispatch(receivePost(id));

  // let deleteCommentSuccess = (comment) => dispatch(removeComment(comment));

  // let deleteLikeSuccess = (id) => dispatch(receivePost(post));

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
      createComment(action.comment, receivePostSuccess, error);
      return next(action);
    case DELETE_COMMENT:
      deleteComment(action.id, receivePostSuccess);
      return next(action);
    case CREATE_LIKE:
      createLike(action.like, receivePostSuccess, error);
      return next(action);
    case DELETE_LIKE:
      deleteLike(action.id, receivePostSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default PostsMiddleware;
