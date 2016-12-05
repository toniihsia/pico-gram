import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PostsReducer from './post_reducer';
import UsersReducer from './users_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  posts: PostsReducer,
  profile: UsersReducer
});

export default rootReducer;
