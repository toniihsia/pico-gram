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
    <button className="header-button" onClick={logOut}>Log Out</button>
  </hgroup>
);

const Greeting = ({currentUser, logOut}) => (
  currentUser ? personalGreeting(currentUser, logOut) : sessionLinks()
);

export default Greeting;
