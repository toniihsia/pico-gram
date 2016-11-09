import React from 'react';
import { hashHistory, Link } from 'react-router';
//
class Comment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let comment = this.props.comment;
    let user = this.props.user;
    let username = this.props.user.username;

    return (
      <div className="singular-comment">
        <Link to={`/users/${user.id}`}>{user.username}</Link>
        {comment.body}
      </div>
    );
  }
}

export default Comment;
