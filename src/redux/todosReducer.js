import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './todosActions';

const initialState = {
  items: [],
  filter: 'asc',
  isLoading: false,
  errorMessage: '',
};

const addTodo = (items, { payload: item }) => [...items, item];
const deleteTodo = (items, { payload: id }) =>
  items.filter((item) => item.id !== id);
const toggleTodo = (items, { payload: todo }) =>
  items.map((item) => (item.id === todo.id ? todo : item));

const items = createReducer(initialState.items, {
  [actions.getTodosSuccess.type]: (_, { payload: todos }) => todos,
  [actions.addTodoSuccess.type]: addTodo,
  [actions.deleteTodoSuccess.type]: deleteTodo,
  [actions.toggleTodoSuccess.type]: toggleTodo,

  [actions.setAscFilter.type]: (items) =>
    [...items].sort((a, b) => a.id - b.id),
  [actions.setDescFilter.type]: (items) =>
    [...items].sort((a, b) => b.id - a.id),
});

// const sortedTodos = [...items].sort((a, b) =>
//   filter === 'asc' ? a.id - b.id : b.id - a.id,
// );

const filter = createReducer(initialState.filter, {
  [actions.setAscFilter.type]: () => 'asc',
  [actions.setDescFilter.type]: () => 'desc',
});

const isLoading = createReducer(initialState.isLoading, {
  [actions.getTodosRequest.type]: () => true,
  [actions.getTodosSuccess.type]: () => false,
  [actions.getTodosFailure.type]: () => false,

  [actions.addTodoRequest.type]: () => true,
  [actions.addTodoSuccess.type]: () => false,
  [actions.addTodoFailure.type]: () => false,

  [actions.deleteTodoRequest.type]: () => true,
  [actions.deleteTodoSuccess.type]: () => false,
  [actions.deleteTodoFailure.type]: () => false,
});

const setError = (_, { payload: error }) => error;

const errorMessage = createReducer(initialState.errorMessage, {
  [actions.getTodosFailure.type]: setError,
  [actions.addTodoFailure.type]: setError,
  [actions.deleteTodoFailure.type]: setError,

  [actions.cleanTodoError.type]: () => '',
});

export default combineReducers({
  items,
  filter,
  isLoading,
  errorMessage,
});
