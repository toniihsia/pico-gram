import React from 'react';
import { Link, hashHistory } from 'react-router';

const headerItems = (currentUser, logOut) => {
  return (
    <ul className="navbar-links">
      <li className="navbar-logo">
        <div className="navbar-logo">
          <Link to="/">
            <label className="home-button-1">Pico</label><label className="home-button-2">Gram</label>
          </Link>
        </div>
      </li>

      <li>
        <Link to="/" className="navbar-item">Upload</Link>
      </li>

      <li>
        <Link className="navbar-item" to="/">Profile</Link>
      </li>

      <li onClick={logOut}>
        <Link className="navbar-item" to="/">Log Out</Link>
      </li>
    </ul>
  );
};

const Header = ({currentUser, logOut}) => {
  if (!currentUser) {
    return ( <div></div>);
  } else {
    return (
      headerItems(currentUser, logOut)
    );
  }
};

export default Header;
