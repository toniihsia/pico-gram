import {
  receiveComment,
  removeComment,
  CREATE_COMMENT,
  DELETE_COMMENT
} from '../actions/comment_actions';

import { createComment, deleteComment } from '../util/comment_api_util';

const CommentsMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  let error = (e) => console.log(e.responseJSON);
  let receiveCommentSuccess = (comment) => dispatch(receiveComment(comment));
  let removeCommentSuccess = (comment) => dispatch(removeComment(comment));

  switch(action.type) {
    case CREATE_COMMENT:
      createComment(action.comment, receiveCommentSuccess);
      return next(action);
    case DELETE_COMMENT:
      deleteComment(action.id, removeCommentSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default CommentsMiddleware;
