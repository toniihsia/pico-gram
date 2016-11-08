import merge from 'lodash/merge';
import { RECEIVE_ALL_POSTS, RECEIVE_POST, CREATE_POST } from '../actions/post_actions';

const PostsReducer = (oldState = [], action) => {
  const newState = [];
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      debugger
      return action.posts;
    case RECEIVE_POST:
      console.log(newState);
      return [action.post, ...oldState]
      console.log(newState);
      return newState;
    // case CREATE_POST:
      // console.log('PostsReducer');
    default:
      return oldState;
  }
};

export default PostsReducer;
