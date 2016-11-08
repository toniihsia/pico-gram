import merge from 'lodash/merge';
import { RECEIVE_COMMENT, DELETE_COMMENT } from '../actions/comment_actions';

const CommentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_COMMENT:
      const comment = action.comment;
      return merge({}, oldState, {[action.comment.id]: action.comment});
    case DELETE_COMMENT:
      let newState = merge({}, oldState);
      delete newState[action.comment.id];
      return newState;
    default:
      return oldState;
  }
};

export default CommentsReducer;
