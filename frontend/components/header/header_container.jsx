import { connect } from 'react-redux';
import { logOut, createPost } from '../../actions/session_actions';
import Header from './header';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut()),
    createPost: (post) => dispatch(createPost(post))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
