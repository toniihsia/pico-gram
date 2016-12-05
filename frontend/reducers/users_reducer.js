import merge from 'lodash/merge';
import { RECEIVE_PROFILE } from '../actions/user_actions';

const _nullProfile = {
  id: 0,
  username: "",
  image_url: ""
};

const UsersReducer = (oldState = _nullProfile, action) => {
  Object.freeze(oldState);
  console.log(action);
  switch (action.type) {
    case RECEIVE_PROFILE:
      return action.profile.userProfile;
    default:
      return oldState;
  }
};

export default UsersReducer;
