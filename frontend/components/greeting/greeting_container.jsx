import { connect } from 'react-redux';
import { logOut } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => {
  const pathName = location.pathname.slice(1);
  const renderState = (pathName === "/login" || pathName === "/signup") ? "renderNone" : "renderBar";

  return {
    logOut: () => dispatch(logOut()),
    renderState
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
