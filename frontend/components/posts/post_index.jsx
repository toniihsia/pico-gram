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
    let keys = Object.keys(this.props.posts)
    for (var i = keys.length - 1; i >= 0; i--) {
      postArray.push(this.props.posts[i])
    }

    console.log(postArray);
    return (
      <div>
        <ul className="post-index-container">
          {
            postArray.map( post => <PostIndexItem
              key={post.id}
              post={post}
              createComment={this.props.createComment}
              removeComment={this.props.removeComment}/> )
          }
        </ul>
      </div>
    );
  }
}

export default PostIndex;
