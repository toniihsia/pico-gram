import { connect } from 'react-redux';
import { logOut } from '../../actions/session_actions';
import {createPost, fetchPosts} from '../../actions/post_actions';
import Header from './header';
import { _childUpdatesIndex } from '../posts/post_index';

const mapStateToProps = ({session, posts}) => ({
  currentUser: session.currentUser,
  updateIndex: _childUpdatesIndex,
  posts
});

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut()),
    createPost: (post) => dispatch(createPost(post)),
    fetchPosts: () => dispatch(fetchPosts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
