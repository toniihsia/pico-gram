import React from 'react';
import {hashHistory} from 'react-router';
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

  // componentWillReceiveProps(nextProps) {
  //   this.props.fetchPosts();
  // }

  render () {
    return (
      <div>
        <ul className="post-index-container">
          {
            this.props.posts.map( post => <PostIndexItem key={post.id} post={post} /> )
          }
        </ul>
      </div>
    );
  }
}

export default PostIndex;
