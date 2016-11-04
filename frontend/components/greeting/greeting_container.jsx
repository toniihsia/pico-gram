import { connect } from 'react-redux';
import { logOut } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut())
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
