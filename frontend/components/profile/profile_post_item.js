import React from 'react';
import { hashHistory, Link } from 'react-router';
import Comment from '../comments/comment';

class ProfilePostItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { openModal: false };

    this.renderPostModal = this.renderPostModal.bind(this);
  }

  renderPostModal() {
    this.setState({ openModal: true });
  }

  closeModal() {
    this.setState({ openModal: false });
  }

  render() {
    let post = this.props.post;
    let profile = this.props.profile;
    return (
      <li className="user-post-li">
        <div className="user-post" onClick={this.renderPostModal}>
          <div className="photo-underlay"></div>
          <img
            className="user-post-photo"
            src={post.image_url}
            alt={profile.username + post.id + post.caption}
          />
        </div>
      </li>
    );
  }
}

export default ProfilePostItem;
