import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({children}) => (
  <div>
    {children}
  </div>
);

export default App;

//// this div is appearing on login page but not the other pages
//// because it is index-routed..


//// componentDidUpdate
  /// checking if state has changed and if it has (esp pertinent)
  /// tp current user) then it will do the redirecting;
