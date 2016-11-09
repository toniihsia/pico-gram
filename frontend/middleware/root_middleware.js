import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import PostsMiddleware from './posts_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  PostsMiddleware
);

export default RootMiddleware;
