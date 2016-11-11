import React from 'react';
import { hashHistory } from 'react-router';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  componentDidUpdate() {
    if (!this.props.currentUser) {
      hashHistory.push("/login");
    }
  }

  render () {
    let postArray = [];
    let keys = Object.keys(this.props.posts);
    for (var i = keys.length - 1; i >= 0; i--) {
      postArray.push(this.props.posts[i]);
    }
    if(!this.props.posts) {
      return (
        <div></div>
      );
    }

    return (
      <div>
        <ul className="post-index-container">
          {
            postArray.map( post => <PostIndexItem
              key={post.id}
              post={post}
              currentUser={this.props.currentUser}
              createComment={this.props.createComment}
              deleteComment={this.props.deleteComment}
              createLike={this.props.createLike}
              deleteLike={this.props.deleteLike}
              createFollow={this.props.createFollow}
              deleteFollow={this.props.deleteFollow}
              /> )
          }
        </ul>
      </div>
    );
  }
}

export default PostIndex;
