import React from 'react';
import { Link, hashHistory } from 'react-router';

const personalGreeting = (currentUser, logOut) => {
  return (
  <div>
    <Link to="/" className="navbar-item">PicoGram</Link>
    <Link to="/" className="navbar-item">Upload</Link>
    <Link to="/" className="navbar-item">Profile</Link>
    <div className="navbar-item" onClick={logOut}>Log Out</div>
  </div>
  );
};

const Greeting = ({currentUser, logOut}) => {

  if (!currentUser) {
    return ( <div></div>);
  } else {
    return (
      personalGreeting(currentUser, logOut)
    );
  }
};

export default Greeting;
