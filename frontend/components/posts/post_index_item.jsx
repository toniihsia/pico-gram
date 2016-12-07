import React from 'react';
import { hashHistory, Link } from 'react-router';
import Comment from '../comments/comment';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        body: '',
        post_id: this.props.post.id
    };

    this.redirectUser = this.redirectUser.bind(this);
    this.renderDelete = this.renderDelete.bind(this);
    this.renderComments = this.renderComments.bind(this);
    this.renderFollowButton = this.renderFollowButton.bind(this);
    this.addComment = this.addComment.bind(this);
    this.likeToggler = this.likeToggler.bind(this);
    this.followToggler = this.followToggler.bind(this);
  }

  shouldComponentUpdate(newProps, oldProps) {
    if (!newProps.currentUser) {
      return false;
    } else {
      return true;
    }
  }

  redirectUser(e) {
    let userId = this.props.user.id;
    let url = `/users/${userId}`;
    hashHistory.push(url);
  }

  update(field) {
    return (e) => { this.setState( {[field]: e.target.value}); };
  }

  addComment(e) {
    e.preventDefault();
    this.props.createComment(this.state);
    this.setState( {body: ''});
  }

  findLikeId(likesArray) {
    for (var i = 0; i < likesArray.length; i++) {
      if (likesArray[i].user_id === this.props.currentUser.id) {
        return likesArray[i].id;
      }
    }
  }

  likeToggler() {
    let post = this.props.post;
    let userIdLikes = post.user_likes;
    let likesArray = post.likes ? Object.keys(post.likes).map(id => post.likes[id]) : [];

    if (userIdLikes.includes(this.props.currentUser.id)) {
      const likeId = this.findLikeId(likesArray);
      // debugger
      this.props.deleteLike(likeId);
    } else {
      this.props.createLike({user_id: this.props.currentUser.id, post_id: post.id});
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

  renderFollowButton() {
    let postAuthorFollowers = this.props.post.user.follower_ids;
    if (this.props.post.user.id === this.props.currentUser.id) {
      return (<div></div>);
    }

    if (this.props.currentUser.followees.includes(this.props.post.user.id)) {
      return (<button className="following-button" onClick={this.followToggler}>Following</button>);
    } else {
      return (<button className="follow-button" onClick={this.followToggler}>Follow</button>);
    }
  }

  followToggler() {
    let currentUser = this.props.currentUser;
    let author = this.props.post.user;

    if (currentUser.followees.includes(author.id)) {
      this.props.deleteFollow(author.id);
    } else {
      this.props.createFollow({followee_id: author.id});
    }
  }



  render() {
    if (!this.props.post.user_likes) {
      return (<div></div>)
    } else {
      let post = this.props.post;
      let author = post.user;
      let postAgeString = `~${post.age} ago`;
      let caption = post.caption;
      let likedPost = (post.user_likes.includes(post.id));

      let postClassName = location.hash.includes("users") ? "individual-post disable-margin" : "individual-post";

      // when uploading the state gets all fucked up
      // jk i fixed it hahahha yes

      return (
        <li>
          <div className={postClassName}>

            <div className="post-header">
              <div className="user-info"><Link
                className="post-author"
                to={`users/${author.id}`}>
                {author.username}
              </Link>
              {this.renderFollowButton()}
            </div><Link
                className="post-age"
                to={`users/${author.id}`}>
                {postAgeString}
              </Link>
            </div>
            <img className="index-photo" src={post.image_url} alt={`${post.user}${post.id}`} />
            <br/>
            <div className="like-count">{`${post.like_count} likes`}</div>

            <div className="caption-box">
              <label className="post-author">{author.username} </label>
              <label>{post.caption}</label>
              <div className="caption-border"></div>
            </div>


            {this.renderComments()}

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
          </div>
        </li>
      );
    }
  }
}

export default PostIndexItem;
