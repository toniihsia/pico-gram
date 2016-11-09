import React from 'react';
import { hashHistory, Link } from 'react-router';
import Comment from '../comments/comment';

class PostIndexItem extends React.Component{
  constructor(props) {
    super(props);

    // this.state = {
    //   comment: {
    //     body: '',
    //     post_id: this.props.post.id,
    //     user_id: this.props.post.user.id
    //   }
    // };

    this.redirectUser = this.redirectUser.bind(this);
    this.renderDelete = this.renderDelete.bind(this);
    this.renderComments = this.renderComments.bind(this);
    this.addComment = this.addComment.bind(this);
  }


  redirectUser(e) {
    let userId = this.props.user.id;
    let url = `/users/${userId}`;
    hashHistory.push(url);
  }

  handleDelete(id) {
    return (e) => {
      e.preventDefault();
      this.props.deleteComment(id);
    };
  }

  addComment(e) {
    e.preventDefault();
    debugger
    this.props.createComment(this.state.comment);
  }

  renderDelete(comment, commentAuthorId) {
    debugger
    if (this.props.currentUser.id === commentAuthorId) {
      return (
        <button onClick={this.handleDelete(comment.id)}>
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

  render() {
    let post = this.props.post;
    let author = post.user;
    let postAgeString = `~${post.age} ago`;
    let caption = post.caption;
    debugger
    let postClassName = location.hash.includes("users") ? "individual-post disable-margin" : "individual-post";

    // when uploading the state gets all fucked up
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
          </div>
          <br/>

          <img className="index-photo" src={post.image_url} alt={`${post.user}${post.id}`} />
          <br/>

          <div>
            <label className="post-author">{author.username} </label>
            <label>{post.caption}</label>
          </div>


          {this.renderComments()}
          <form>
            <input type="text" placeholder="Add a comment..." />
            <button type="submit" onClick={this.addComment} className='comment-submission'>Add Comment</button>
          </form>
        </div>
      </li>
    );
  }
}

export default PostIndexItem;
