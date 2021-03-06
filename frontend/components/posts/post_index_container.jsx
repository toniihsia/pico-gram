import { connect } from 'react-redux';
import { fetchPosts, createPost } from '../../actions/post_actions';
import { createComment, deleteComment } from '../../actions/comment_actions';
import { createLike, deleteLike } from '../../actions/like_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';

import PostIndex from './post_index';

const mapStateToProps = (state) => {
  return ({
    posts: Object.keys(state.posts).map(id => state.posts[id]),
    currentUser: state.session.currentUser
  });

};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  createPost: (post) => dispatch(createPost(post)),
  createComment: (comment) => dispatch(createComment(comment)),
  deleteComment: (id) => dispatch(deleteComment(id)),
  createLike: (like) => dispatch(createLike(like)),
  deleteLike: (id) => dispatch(deleteLike(id)),
  ////////////////////////////////////
  createFollow: (follow) => dispatch(createFollow(follow)),
  deleteFollow: (id) => dispatch(deleteFollow(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
