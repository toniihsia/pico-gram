import merge from 'lodash/merge';
import { RECEIVE_ALL_POSTS, RECEIVE_POST } from '../actions/post_actions';

const PostsReducer = (oldState = [], action) => {
  const newState = [];
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return action.posts;
    case RECEIVE_POST:
      return [action.post, ...oldState];
    default:
      return oldState;
  }
};

export default PostsReducer;
