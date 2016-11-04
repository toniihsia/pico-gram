import React from 'react';

const PostIndexItem = ({post}) => (
  <li>
    <img src={post.image_url} alt={`${post.user}${post.id}`} />
  </li>
);

export default PostIndexItem;
