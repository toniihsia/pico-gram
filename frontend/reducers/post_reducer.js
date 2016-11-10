import merge from 'lodash/merge';
import { RECEIVE_ALL_POSTS, RECEIVE_POST } from '../actions/post_actions';

const PostsReducer = (oldState = {}, action) => {

  const newState = merge({}, oldState);
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return action.posts;
    case RECEIVE_POST:
      let postId = parseInt(Object.keys(action.post)[0]);
      newState[postId] = action.post[postId];
      if (action.post[postId].comments) {
        newState[postId].comments = action.post[postId].comments;
      }
      // newState[postId].comments = action.post[postId].comments;
      newState[postId].like_count = action.post[postId].like_count;
      return newState;
    default:
      return oldState;
  }
};

export default PostsReducer;
