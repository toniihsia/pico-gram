import { connect } from 'react-redux';
import { fetchProfile } from '../../actions/user_actions';
import { createComment, deleteComment } from '../../actions/comment_actions';
import { createLike, deleteLike } from '../../actions/like_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';

import Profile from './profile';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    profile: state.profile,
    posts: Object.keys(state.posts).map(id => state.posts[id]),
    state: state
  });
};

const mapDispatchToProps = (dispatch) => ({
  createComment: (comment) => dispatch(createComment(comment)),
  deleteComment: (id) => dispatch(deleteComment(id)),
  createLike: (postId) => dispatch(createLike(postId)),
  deleteLike: (postId) => (dispatch(deleteLike(postId)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
