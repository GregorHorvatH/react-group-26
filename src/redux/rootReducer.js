import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import counter from './counter/reducer';
import counterToolkit from './counterToolkit/reducer';
import counterToolkitSlice from './counterToolkitSlice';
import todos from './todos/reducer';
import user from './user';

const todosPersistConfig = {
  key: 'todos',
  storage,
};

const todosReducer = persistReducer(todosPersistConfig, todos);

const tokenPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const userReducer = persistReducer(tokenPersistConfig, user);

export default combineReducers({
  counter,
  counterToolkit,
  counterToolkitSlice,
  todos: todosReducer,
  user: userReducer,
});
