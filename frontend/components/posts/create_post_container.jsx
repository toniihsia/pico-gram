import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import CreatePostForm from './create_post_form';


const mapStateToProps = ({ image_url, caption, user_id }) => ({
  image_url,
  caption,
  user_id
});

const mapDispatchToProps = (dispatch, { location }) => ({
  createPost: (post) => createPost(post)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePostForm);
