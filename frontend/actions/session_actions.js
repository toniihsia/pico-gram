export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const SIGN_UP = "SIGN_UP";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER";

export const logIn = (user) => ({
  type: LOG_IN,
  user
});

export const logOut = () => ({
  type: LOG_OUT
});

export const signUp = (user) => ({
  type: SIGN_UP,
  user
});

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const removeCurrentUser = () => ({
  type: REMOVE_CURRENT_USER
});
