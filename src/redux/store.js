import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import reducer from './rootReducer';

// const thunk = ({ dispatch, getState }) => (next) => (action) =>
//   typeof action === 'function' ? action(dispatch, getState) : next(action);

// const loggerMiddleware = (store) => (next) => (action) => {
//   console.group(action.type);
//   console.info('dispatching', action);
//   console.groupEnd(action.type);

//   return next(action);
// };

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
