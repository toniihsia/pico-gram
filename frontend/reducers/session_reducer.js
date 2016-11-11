import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER, RECEIVE_ERRORS }
  from '../actions/session_actions';
import { RECEIVE_FOLLOW } from '../actions/follow_actions';

const _nullUser = Object.freeze({
  currentUser: {
    followers: [],
    followees: []
  },
  errors: []
});

const SessionReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _nullUser, {currentUser});
    case REMOVE_CURRENT_USER:
      return merge({}, _nullUser);
    case RECEIVE_FOLLOW:

      newState.currentUser.followees = [...oldState, action.follow.followee_id];
      return newState;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullUser, {errors});
    default:
      return oldState;
  }
};

export default SessionReducer;
