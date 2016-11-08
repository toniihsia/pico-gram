import React from 'react';
import HeaderContainer from './header/header_container';
// import Modal from 'react-modal';

const App = ({children}) => (
  <div>
    <HeaderContainer />
    {children}
  </div>
);

export default App;
