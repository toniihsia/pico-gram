import {
  receiveComment,
  CREATE_COMMENT
} from '../actions/comment_actions';

import { createComment } from '..util/comment_api_util';

const CommentsMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  let error = (e) => console.log(e.responseJSON);
  let receiveCommentSuccess = (comment) => dispatch(receiveComment(comment));

  switch(action.type) {
    case CREATE_COMMENT:
      createComment(action.comment, receiveCommentSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default CommentsMiddleware;
