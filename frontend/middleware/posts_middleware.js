import {
  receiveAllPosts,
  receivePost,
  FETCH_POSTS,
  FETCH_POST,
  CREATE_POST
} from '../actions/post_actions';
import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/comment_actions';
import { CREATE_LIKE, DELETE_LIKE } from '../actions/like_actions';
import { CREATE_FOLLOW, DELETE_FOLLOW, RECEIVE_FOLLOW, receiveFollow, removeFollow } from '../actions/follow_actions';
import { receiveCurrentUser } from '../actions/session_actions';

import { fetchPosts, fetchPost, createPost } from '../util/post_api_util';
import { createLike, deleteLike } from '../util/like_api_util';
import { createComment, deleteComment } from '../util/comment_api_util';
import { createFollow, deleteFollow } from '../util/follow_api_util';

const PostsMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  let error = (e) => console.log(e.responseJSON);
  let receiveAllPostsSuccess = (posts) => dispatch(receiveAllPosts(posts));
  let receivePostSuccess = (id) => dispatch(receivePost(id));

  // let receiveFollowSuccess = (follow) => dispatch(receiveFollow(follow));
  // let receiveDeleteSuccess = (follow) => dispatch(removeFollow(follow));

  console.log(action);
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
    /// these should be changed to a separate middleware when i have time
    // case CREATE_FOLLOW:
    //   createFollow(action.follow, receiveFollowSuccess);
    //   return next(action);
    // case DELETE_FOLLOW:
    //   deleteFollow(action.id, receiveDeleteSuccess);
    //   return next(action);
    default:
      return next(action);
  }
};

export default PostsMiddleware;
