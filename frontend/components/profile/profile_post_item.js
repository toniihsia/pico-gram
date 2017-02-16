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
        post_id: this.props.post.id,
      deletedCommentId: 0,
      newLike: false,
      deletedLike: 0
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
    this.likeToggler = this.likeToggler.bind(this);
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

  likeToggler() {
    let currentUser = this.props.currentUser;
    let post = this.props.post;
    let userIdLikes = post.user_likes;
    let likesArray = post.likes ? Object.keys(post.likes).map(id => post.likes[id]) : [];

    console.log(this.props.currentUser.id);
    if (userIdLikes.includes(this.props.currentUser.id)) {
      console.log('should delete');
      const likeId = this.findLikeId(likesArray);
      // debugger
      this.props.deleteLike(likeId);
      this.props.fetchProfile(currentUser.id);
      this.setState.deletedLike = likeId;
    } else {
      console.log('should make');
      this.props.createLike({user_id: this.props.currentUser.id, post_id: post.id});
      this.props.fetchProfile(currentUser.id);
      this.setState.newLike = !this.state.newLikeId;
    }
  }

  findLikeId(likesArray) {
    for (var i = 0; i < likesArray.length; i++) {
      if (likesArray[i].user_id === this.props.currentUser.id) {
        return likesArray[i].id;
      }
    }
  }

  addComment(e) {
    e.preventDefault();
    this.props.createComment(this.state.comment);
    this.props.fetchProfile(this.props.profile.id);
    this.setState( {
      comment: {body: '', post_id: this.props.post.id},
      openModal: true
    });
  }

  update(field) {
    return (e) => { this.setState( {comment: {[field]: e.target.value, post_id: this.props.post.id}}); };
  }

  renderComments() {
    let author = this.props.profile;
    let commentsObject = this.props.post.comments;
    let commentsArray = [];
    let postAgeString = `~${this.props.post.age} ago`;
    if (commentsObject) {
      commentsArray = Object.keys(commentsObject).map(id => commentsObject[id]);
    }
    // console.log(this.state);
    return (
      <div className="inner-comments-container">
        <button className="inner-close-modal" onClick={this.closeModal}>X</button>
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
          <div className="inner-user-info">
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
                <div className="delete-container">{this.renderDelete(comment, comment.user_id)}</div>
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
                value={this.state.comment.body}
              />
              <button
                type="submit" onClick={this.addComment}
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
        <button
          id={comment.id}
          className="comment-delete-button"
          onClick={this.deleteComment.bind(this, comment.id)}>
          X
        </button>
      );
    }
  }

  deleteComment(commentId) {
    this.props.deleteComment(commentId);
    this.props.fetchProfile(this.props.profile.id);
    this.setState.deletedCommentId = commentId;
  }

// destructuring assignment:
// tighter syntax for pulling multiple things off of the same Object
//  a, b, c, = 1, 2, 3
//  ES6 you can do that

  render() {
    console.log(this.props);
    let post = this.props.post;
    let profile = this.props.profile;
    const style = {
      overlay : {
        position          : 'fixed',
        textAlign         : 'center',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(62, 62, 62, 0.6)',
        zIndex            : 11
      },
      content : {
        // position                   : 'fixed',
        // top                        : '0%',
        // left                       : '0%',
        display                    : "inline-block",
        border                     : '1px solid #ccc',
        background                 : '#fff',
        overflow                   : 'auto',
        outline                    : 'none',
        translate                  : 'translate(-50%, -50%)',
        zIndex                     : 11,
        verticalAlign              : 'middle',
        top                        : '50%',
        transform                  : 'translateY(50%)'
      }
    };

    let commentCount = 0;
    if (this.props.post.comments) {
      let postAgeString = `~${this.props.post.age} ago`;
      let commentsObject = this.props.post.comments;
      let commentsArray = Object.keys(commentsObject).map(id => commentsObject[id]);
      commentCount = commentsArray.length;
    }

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
          <div className="inner-post-modal">
            <div className="photo-container">
              <img className="inner-post-photo" src={post.image_url} alt="modal-photo" />
            </div>
            {this.renderComments()}
          </div>
        </Modal>
      </li>
    );
  }
}

export default ProfilePostItem;
