import React from 'react';
import { hashHistory, Link } from 'react-router';
import Comment from '../comments/comment';

class PostIndexItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        body: '',
        post_id: this.props.post.id,
    };

    this.redirectUser = this.redirectUser.bind(this);
    this.renderDelete = this.renderDelete.bind(this);
    this.renderComments = this.renderComments.bind(this);
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
          x
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
                <Link
                  className="post-author"
                  to={`users/${comment.user_id}`}>
                  {comment.username }
                </Link>
                {` ${comment.body}`}
                {this.renderDelete(comment, comment.user_id)}
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
    if (postAuthorFollowers.includes(this.props.currentUser.id)) {
      return (<button className="follow-button" onClick={this.followToggler}>Unfollow</button>)
    } else {
      return (<button className="follow-button" onClick={this.followToggler}>Follow</button>)
    }
  }

  followToggler() {
    debugger
    let currentUser = this.props.currentUser;
    let author = this.props.post.user;
    let currentFolloweeIds = currentUser.followees ? Object.keys(currentUser.followees).map(followee => followee.id) : [];
    // let currentFolloweesArray = currentUser.followees ? Object.keys(currentFollowees).map(id => currentFollowees[id]) : []

    if (currentFolloweeIds.includes(author.id)) {
      this.props.deleteFollow({followee_id: author.id, follower_id: currentUser.id});
    } else {
      this.props.createFollow({followee_id: author.id, follower_id: currentUser.id})
    }

    // let author = this.props.post.user
    // let postAuthorFollowers = author.follower_ids;
    // let followsArray = author.followers ? Object.keys(author.followers).map(id => author.followers[id]) : [];
    //
    // if (postAuthorFollowers.includes(this.props.currentUser.id)) {
    //   const followId = this.findFollowId(followsArray);
    //   this.props.deleteFollow(followId);
    // } else {
    //   this.props.createFollow({followee_id: author.id})
    // }
  }

  // findFollowId(followsArray) {
  //   for (var i = 0; i < followsArray.length; i++) {
  //     if (followsArray[i].user_id === this.props.currentUser.id) {
  //       return followsArray[i].id;
  //     }
  //   }
  // }


  render() {

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
            <Link
              className="post-author"
              to={`users/${author.id}`}>
              {author.username}
            </Link>
            <Link
              className="post-age"
              to={`users/${author.id}`}>
              {postAgeString}
            </Link>
            {this.renderFollowButton()}
          </div>
          <br/>

          <img className="index-photo" src={post.image_url} alt={`${post.user}${post.id}`} />
          <br/>

          <div>
            <label className="post-author">{author.username} </label>
            <label>{post.caption}</label>
          </div>


          {this.renderComments()}

          <div>
            {this.renderLikeButton()}
            {`${post.like_count} likes`}
          </div>


          <form className="comment-form">
            <input type="text" placeholder="Add a comment..." onChange={this.update('body')} value={this.state.body}/>
            <button type="submit" onClick={this.addComment} className='comment-submission'>Add Comment</button>
          </form>
        </div>
      </li>
    );
  }
}

export default PostIndexItem;
