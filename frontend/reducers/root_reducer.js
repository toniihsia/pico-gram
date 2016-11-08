import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PostsReducer from './post_reducer';
import CommentsReducer from './comment_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  posts: PostsReducer,
  comments: CommentsReducer
});

export default rootReducer;
