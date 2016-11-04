import React from 'react';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// react components
import App from './app';
// import SearchContainer from './search/search_container';
// import BenchFormContainer from './bench_form/bench_form_container';
// import BenchShowContainer from './bench_show/bench_show_container';
// import ReviewFormContainer from './bench_show/review_form_container';
import SessionFormContainer from './session_form/session_form_container';
import GreetingContainer from './greeting/greeting_container';
import PostIndexContainer from './posts/post_index_container';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/posts');
    }
  };

  // const _redirectToLogIn = (nextState, replace) => {
  //   const currentUser = store.getState().session.currentUser;
  //   if (!currentUser) {
  //     replace('/login');
  //   }
  // };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
            <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
            <Route path="/posts" component={PostIndexContainer} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
