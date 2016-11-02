import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

/// TESTS ///
import { logIn, signUp, logOut } from './actions/session_actions';
window.store = configureStore();
window.logIn = logIn;
window.signUp = signUp;
window.logOut = logOut;

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();
    ReactDOM.render(<h1>Welcome to Picogram</h1>, root);
});
