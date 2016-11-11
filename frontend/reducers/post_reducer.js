import merge from 'lodash/merge';
import { RECEIVE_ALL_POSTS, RECEIVE_POST } from '../actions/post_actions';

const emptyPost = { id: null, likes: {}, comments: {}, user: {followers: {}, followees: {}}};
const PostsReducer = (oldState = {}, action) => {


  const newState = merge({}, oldState);
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return action.posts;
    case RECEIVE_POST:
      // debugger
      let postId = parseInt(Object.keys(action.post)[0]);
      newState[postId] = merge({}, emptyPost, action.post[postId]);
      return newState;
    default:
      return oldState;
  }
};

export default PostsReducer;
