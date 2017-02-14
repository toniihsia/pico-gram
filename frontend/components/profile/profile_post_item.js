import React from 'react';
import { hashHistory, Link } from 'react-router';
import Comment from '../comments/comment';
import Modal from 'react-modal';

class ProfilePostItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openModal: false,
      comment: {
        body: '',
        post_id: this.props.post.id
      }
    };

    // this.renderPostModal = this.renderPostModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addComment = this.addComment.bind(this);
    this.update = this.update.bind(this);
    this.renderComments = this.renderComments.bind(this);
    this.renderLikeButton = this.renderLikeButton.bind(this);
    this.renderDelete = this.renderDelete.bind(this);
  }

  openModal() {
    this.setState({ openModal: true });
  }

  closeModal() {
    this.setState({ openModal: false });
  }

  renderLikeButton() {
    // debugger
    let post = this.props.post;
    let likedPost = post.user_likes.includes(this.props.currentUser.id);
    let likeFill;

    if (likedPost) {
      likeFill = "filled-like-button";
    } else {
      likeFill = "unfilled-like-button";
    }

    return (<button className={likeFill} onClick={this.likeToggler}></button>);
  }

  addComment(e) {
    e.preventDefault();
    this.props.createComment(this.state.comment);
    this.setState( {comment: {body: '', post_id: this.props.post.id}});
  }

  update(field) {
    return (e) => { this.setState( {comment: {[field]: e.target.value, post_id: this.props.post.id}}); };
  }

  renderComments() {
    let author = this.props.profile;
    let commentsObject = this.props.comments;
    let commentsArray = [];
    let postAgeString = `~${this.props.post.age} ago`;
    if (commentsObject) {
      commentsArray = Object.keys(commentsObject).map(id => commentsObject[id]);
    }

    return (
      <div className="inner-comments-container">
        <button className="comment-delete-button" onClick={this.closeModal}>X</button>
        <div className="post-header">
          <div className="user-info">
            <img className="profile-pic-prev" src={this.props.profile.profile_pic} /><Link
            className="inner-post-author"
            to={`users/${author.id}`}>
            {author.username}
          </Link>
        </div><Link
            className="inner-post-age"
            to={`users/${author.id}`}>
            {postAgeString}
          </Link>
        </div>
        <div>
          <div className="user-info">
            <Link
              className="comment-author"
              to={`users/${this.props.profile.id}`}>
              {this.props.profile.username }
            </Link>
            {` ${this.props.post.caption}`}
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
            </div>
        ))}
        <div className="comment-section">

          {this.renderLikeButton()}<form
            className="comment-form">
              <input
                type="text"
                className="comment-input"
                placeholder="Add a comment..."
                onChange={this.update('body')}
                value={this.state.body}
              />
              <button
                type="submit" onClick={this.addComment}
                className='comment-submission'
                className="comment-submit-button">
              </button>
            </form>
        </div>
        <div className="clear"></div>
      </div>
    </div>
    );
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

    let commentCount = 0;
    if (this.props.post.comments) {
      let postAgeString = `~${this.props.post.age} ago`;
      let commentsObject = this.props.post.comments;
      let commentsArray = Object.keys(commentsObject).map(id => commentsObject[id]);
      commentCount = commentsArray.length;
    }

    console.log(this.props);
    return (
      <li className="user-post-li">
        <div className="user-post" onClick={this.openModal}>
          <img
            className="user-post-photo"
            src={post.image_url}
            alt={profile.username + post.id + post.caption}
          />
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
