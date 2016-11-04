import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render () {
    return (
      <div>
        <ul>
          {
            this.props.posts.map( post => <PostIndexItem post={post} /> )
          }
        </ul>
      </div>
    );
  }
}

export default PostIndex;
