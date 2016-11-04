import merge from 'lodash/merge';
import { RECEIVE_ALL_POSTS, RECEIVE_POST } from '../actions/post_actions';

const PostsReducer = (oldState = {}, action) => {
  const newState = merge({}, oldState);
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALL_POSTS:
      debugger
      return action.posts;
    case RECEIVE_POST:
      newState[action.post.id] = action.post;
      return newState;
    default:
      return oldState;
  }
};

export default PostsReducer;
