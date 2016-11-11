import {
  receiveCurrentUser,
  receiveErrors,
  removeCurrentUser,
  LOG_IN,
  LOG_OUT,
  SIGN_UP
} from '../actions/session_actions';
import { CREATE_FOLLOW, DELETE_FOLLOW, RECEIVE_FOLLOW, receiveFollow, removeFollow } from '../actions/follow_actions';

import { createFollow, deleteFollow } from '../util/follow_api_util';

import { hashHistory } from 'react-router';
import { logIn, signUp, logOut } from '../util/session_api_util';

export default ({getState, dispatch}) => next => action => {
  const successCallback = (currentUser) => dispatch(receiveCurrentUser(currentUser));
  const successLogOutCallback = () => {
    dispatch(removeCurrentUser());
    hashHistory.push('/login');
  };
  const receiveFollowSuccess = (follow) => dispatch(receiveFollow(follow));
  const receiveDeleteSuccess = (follow) => dispatch(removeFollow(follow));
  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON));


  switch(action.type){
    case LOG_IN:
      logIn(action.user, successCallback, errorCallback);
      return next(action);
    case LOG_OUT:
      // debugger
      logOut(successLogOutCallback, errorCallback);
      return next(action);
    case SIGN_UP:
      signUp(action.user, successCallback, errorCallback);
      return next(action);
    case CREATE_FOLLOW:
      createFollow(action.follow, receiveFollowSuccess);
      return next(action);
    case DELETE_FOLLOW:
      deleteFollow(action.id, receiveDeleteSuccess);
      return next(action);
    default:
      return next(action);
  }
};
