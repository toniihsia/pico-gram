import React from 'react';
import { hashHistory, Link } from 'react-router';
import Comment from '../comments/comment';
import Modal from 'react-modal';

class ProfilePostItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { openModal: false };

    // this.renderPostModal = this.renderPostModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ openModal: true });
  }

  closeModal() {
    this.setState({ openModal: false });
  }

  renderComments() {
    if (this.props.post.comments) {
      let commentsObject = this.props.post.comments;
      let commentsArray = Object.keys(commentsObject).map(id => commentsObject[id]);
      if (commentsObject) {
        return (
          <div className="comments-container">
            {commentsArray.map(comment => (
              <div className="comment" key={`comment${comment.id}`}>
                <div className="user-info">
                  <Link
                    className="comment-author"
                    to={`users/${comment.user_id}`}>
                    {comment.username }
                  </Link>
                  {` ${comment.body}`}
                </div>
                <div className="delete-container">{this.renderDelete(comment, comment.user_id)}</div>
              </div>
            ))}
          </div>
        );
      }
    } else {
      return (<div></div>);
    }
  }

  renderDelete(comment, commentAuthorId) {
    if (this.props.currentUser.id === commentAuthorId) {
      return (
        <button className="comment-delete-button"onClick={this.props.deleteComment.bind(this, comment.id)}>
          X
        </button>
      );
    }
  }

// destructuring assignment:
// tighter syntax for pulling multiple things off of the same Object
//  a, b, c, = 1, 2, 3
//  ES6 you can do that

  render() {
    let post = this.props.post;
    let profile = this.props.profile;

    return (
      <li className="user-post-li">
        <div className="user-post" onClick={this.openModal}>
          <div className="photo-underlay"></div>
          <img
            className="user-post-photo"
            src={post.image_url}
            alt={profile.username + post.id + post.caption}
          />
          <div className="photo-overlay">
            {post.like_count}
          </div>
        </div>

        <Modal
          isOpen={this.state.openModal}
          overlayClassName="overlay"
          className="post-modal"
          >
          <img className="modal-photo" src={post.image_url} alt="modal-photo" />
          {this.renderComments()}
          <button onClick={this.closeModal}>Get me out.</button>

        </Modal>
      </li>
    );
  }
}

export default ProfilePostItem;
