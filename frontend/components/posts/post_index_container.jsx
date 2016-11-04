import { connect } from 'react-redux';
import { fetchPosts, createPost } from '../../actions/post_actions';
import PostIndex from './post_index';

const mapStateToProps = (state) => {
  return ({
    posts: Object.keys(state.posts).map(id => state.posts[id]),
    currentUser: state.session.currentUser
  });

};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  createPost: (post) => dispatch(createPost(post))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
