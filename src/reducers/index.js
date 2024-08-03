import { combineReducers } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';
import uiReducer from '../features/ui/uiSlice';

const rootReducer = combineReducers({
  posts: postsReducer,
  ui: uiReducer,
});

export default rootReducer;