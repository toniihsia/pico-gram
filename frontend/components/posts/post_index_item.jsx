import React from 'react';
import { hashHistory, Link } from 'react-router';
// import Comments from './comments';

class PostIndexItem extends React.Component{
  constructor(props) {
    super(props);
  }


  redirectUser(e) {
    let userId = this.props.user.id;
    let url = `/users/${userId}`;
    hashHistory.push(url);
  }

  render() {
    let post = this.props.post;
    let author = post.user;
    let postAgeString = `~${post.age} ago`;
    let caption = post.caption;
    let postClassName = location.hash.includes("users") ? "individual-post disable-margin" : "individual-post";

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
        </div>
      </li>
    );
  }
}

export default PostIndexItem;
