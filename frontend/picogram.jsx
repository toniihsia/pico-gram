/// React ///
import React from 'react';
import ReactDOM from 'react-dom';

/// Components ///
import configureStore from './store/store';
import Root from './components/root';

/// Tests ///
import { logIn, signUp, logOut } from './actions/session_actions';
window.store = configureStore();
window.logIn = logIn;
window.signUp = signUp;
window.logOut = logOut;

/// Actual Code ///
document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
      const preloadedState = {session: {currentUser: window.currentUser, errors: []}};
      store = configureStore(preloadedState);
    } else {
      store = configureStore();
    }
    const rootEl = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, rootEl);
});
