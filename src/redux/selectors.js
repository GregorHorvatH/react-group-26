import { createSelector } from 'reselect';

export const getTodoItems = (state) => state.todos.items;

export const getDoneTodos = createSelector(getTodoItems, (items) =>
  items.filter((item) => item.isDone),
);

export const getNotDoneTodos = createSelector(getTodoItems, (items) =>
  items.filter((item) => !item.isDone),
);
