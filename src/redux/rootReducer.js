import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import counter from './counter/reducer';
import counterToolkit from './counterToolkit/reducer';
import counterToolkitSlice from './counterToolkitSlice';
import todos from './todos/reducer';

const persistConfig = {
  key: 'todos',
  storage,
};

const todosReducer = persistReducer(persistConfig, todos);

export default combineReducers({
  counter,
  counterToolkit,
  counterToolkitSlice,
  todos: todosReducer,
});
