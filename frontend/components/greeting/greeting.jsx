import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
      <Link to="/login" activeClassName="current">Login</Link>
      <Link to="/signup" activeClassName="current">Sign up!</Link>
  </nav>
);

const personalGreeting = (currentUser, logOut) => (
  <hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logOut}>
      <Link to="/login">Sign Out</Link>
    </button>
  </hgroup>
);

const Greeting = ({currentUser, logOut}) => (
  currentUser ? personalGreeting(currentUser, logOut) : sessionLinks()
);

export default Greeting;

/// checking for path in greeting container to see whether you should
/// render an empty div or not
/// similar to helper functions for guest log in etc. in
/// session form
