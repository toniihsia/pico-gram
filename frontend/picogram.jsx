/// React ///
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

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
    Modal.setAppElement(document.body);
    ReactDOM.render(<Root store={store} />, rootEl);
});
