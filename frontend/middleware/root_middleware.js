import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import PostsMiddleware from './posts_middleware';
import UsersMiddleware from './users_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  PostsMiddleware,
  UsersMiddleware
);

export default RootMiddleware;
