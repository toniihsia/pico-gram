import { connect } from 'react-redux';
import { fetchProfile } from '../../actions/user_actions';
import { createComment, deleteComment } from '../../actions/comment_actions';
import { createLike, deleteLike } from '../../actions/like_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';
import { fetchPosts, fetchPost } from '../../actions/post_actions';
import { _childUpdatesIndex } from '../posts/post_index';

import Profile from './profile';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    profile: state.profile,
    posts: Object.keys(state.posts).map(id => state.posts[id]),
    state: state,
    updateIndex: _childUpdatesIndex
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchProfile: (id) => dispatch(fetchProfile(id)),
  fetchPosts: () => dispatch(fetchPosts()),
  fetchPost: (id) => dispatch(fetchPost(id)),
  createComment: (comment) => dispatch(createComment(comment)),
  deleteComment: (id) => dispatch(deleteComment(id)),
  createLike: (like) => dispatch(createLike(like)),
  deleteLike: (id) => dispatch(deleteLike(id)),
  createFollow: (follow) => dispatch(createFollow(follow)),
  deleteFollow: (id) => dispatch(deleteFollow(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
