export const signUp = (user, success, error) => {
  $.ajax({
    type: 'POST',
    url: 'api/users',
    data: {user},
    success,
    error
  });
};

export const logIn = (user, success, error) => {
  $.ajax({
    type: 'POST',
    url: 'api/session/',
    data: {user},
    success,
    error
  });
};

export const logOut = (success, error) => {
  $.ajax({
    type: 'DELETE',
    url: 'api/session',
    success,
    error: () => { console.log("Logout error in SessionApiUtil#logout"); }
  });
};
