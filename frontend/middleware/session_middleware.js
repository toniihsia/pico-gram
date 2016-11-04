import {
  receiveCurrentUser,
  receiveErrors,
  removeCurrentUser,
  LOG_IN,
  LOG_OUT,
  SIGN_UP
} from '../actions/session_actions';

import { logIn, signUp, logOut } from '../util/session_api_util';
import { hashHistory } from 'react-router';

export default ({getState, dispatch}) => next => action => {
  const successCallback = (currentUser) => dispatch(receiveCurrentUser(currentUser));
  const successLogOutCallback = () => dispatch(removeCurrentUser());

  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON));

  switch(action.type){
    case LOG_IN:
      logIn(action.user, successCallback, errorCallback);
      return next(action);
    case LOG_OUT:
      logOut(successLogOutCallback, errorCallback);
      return next(action);
    case SIGN_UP:
      signUp(action.user, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
