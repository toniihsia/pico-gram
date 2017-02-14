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
    let author = this.props.profile;
    if (this.props.post.comments) {
      let postAgeString = `~${this.props.post.age} ago`;
      let commentsObject = this.props.post.comments;
      let commentsArray = Object.keys(commentsObject).map(id => commentsObject[id]);
      if (commentsObject) {
        return (
          <div className="inner-comments-container">
            <div className="post-header">
              <div className="user-info"><Link
                className="post-author"
                to={`users/${author.id}`}>
                {author.username}
              </Link>
            </div><Link
                className="post-age"
                to={`users/${author.id}`}>
                {postAgeString}
              </Link>
            </div>
            {commentsArray.map(comment => (
              <div className="inner-comment" key={`comment${comment.id}`}>
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
            <button className="just-wait" onClick={this.closeModal}>Get me out.</button>
            <div className="clear"></div>
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
    const style = {
      overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(62, 62, 62, 0.6)',
        zIndex            : 11
      },
      content : {
        position                   : 'fixed',
        top                        : '20%',
        bottom                        : '20%',
        left                       : '16%',
        right                       : '16%',
        border                     : '1px solid #ccc',
        background                 : '#fff',
        overflow                   : 'auto',
        outline                    : 'none',
        zIndex                     : 11
      }
    };

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
          style={style}
          >
          <div className="photo-container">
            <img className="inner-post-photo" src={post.image_url} alt="modal-photo" />
          </div>
          {this.renderComments()}
        </Modal>
      </li>
    );
  }
}

export default ProfilePostItem;
