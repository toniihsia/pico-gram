import React from 'react';
import { hashHistory, Link } from 'react-router';

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

    return (
      <li>
        <Link to={`users/${author.id}`}>{author.username}</Link>
        <Link to={`users/${author.id}`}>{postAgeString}</Link>
        <br/>
        <img src={post.image_url} alt={`${post.user}${post.id}`} />

      </li>
    );
  }
}

export default PostIndexItem;
