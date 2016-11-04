/// React ///
import React from 'react';
import ReactDOM from 'react-dom';

/// Components ///
import configureStore from './store/store';
import Root from './components/root';

/// Entry Code ///
document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
      const preloadedState = {session: {currentUser: window.currentUser, errors: []}};
      store = configureStore(preloadedState);
    } else {
      store = configureStore();
    }
    window.store = store;
    const rootEl = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, rootEl);
});
