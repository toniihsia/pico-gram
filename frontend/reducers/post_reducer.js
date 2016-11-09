import merge from 'lodash/merge';
import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_COMMENT } from '../actions/post_actions';

const PostsReducer = (oldState = {}, action) => {

  const newState = merge({}, oldState);
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      // debugger
      return action.posts;
    case RECEIVE_POST:
      // debugger
      newState[action.post.id] = action.post;
      newState[action.post.id].comments = action.post.comments;
      // debugger
      return newState;
      // newState[action.post.id] = action.post;
      // return newState;
    // case REMOVE_COMMENT:
    //   let post = newState[action.id.post_id];
    //   let comments = post.coments;
    //
    default:
      return oldState;
  }
};

export default PostsReducer;
