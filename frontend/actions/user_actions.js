export const FETCH_PROFILE = 'FETCH_PROFILE';
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';
export const RECEIVE_PROFILE_ERRORS = 'RECEIVE_PROFILE_ERRORS';

export const fetchProfile = (id) => ({
  type: FETCH_PROFILE,
  id
});

export const receiveProfile = (profile) => ({
  type: RECEIVE_PROFILE,
  profile
});
