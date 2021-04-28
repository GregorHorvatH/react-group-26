import { configureStore } from '@reduxjs/toolkit';
import counter from './counterReducer';
import todos from './todosReducer';

const store = configureStore({
  reducer: {
    counter,
    todos,
  },
});

export default store;
