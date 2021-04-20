import { combineReducers } from 'redux';
import types from './types';

const initialState = {
  items: [
    {
      id: 1,
      text: 'do something',
      created: Date.now(),
      isDone: false,
    },
  ],
};

const items = (state = initialState.items, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_TODO:
      return [...state, payload];

    case types.DELETE_TODO:
      return state.filter(({ id }) => id !== payload);

    case types.TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === payload
          ? {
              ...todo,
              isDone: !todo.isDone,
            }
          : todo,
      );

    default:
      return state;
  }
};

export default combineReducers({
  items,
});
