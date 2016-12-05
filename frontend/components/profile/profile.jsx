import React from 'react';
import { hashHistory, Link, withRouter } from 'react-router';
// import ProfilePost from './profile_post';
import Modal from 'react-modal';
import merge from 'lodash/merge';

class Profile extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    console.log(this.props);
    return (<div>hello</div>);
  }
}

export default Profile;
