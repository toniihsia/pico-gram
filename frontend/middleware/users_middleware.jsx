import { FETCH_PROFILE, receiveProfile } from '../actions/user_actions';
import { fetchProfile } from '../util/users_api_util';

const UsersMiddleware = ({ getState, dispatch }) => next => action => {
  const fetchProfileSuccess = (profile) => (dispatch(receiveProfile(profile)));
  const fetchProfileError = () => (console.log("FAILURE"));

  console.log(action);
  switch(action.type) {
    case FETCH_PROFILE:
      fetchProfile(action.id, fetchProfileSuccess, fetchProfileError);
      return next(action);
    default:
      return next(action);
  }
};

export default UsersMiddleware;
