import { createAction } from '@reduxjs/toolkit';
import types from './types';

export const addTodo = createAction(types.ADD_TODO);
export const deleteTodo = createAction(types.DELETE_TODO);
export const toggleTodo = createAction(types.TOGGLE_TODO);

export const getTodosRequest = createAction(types.GET_TODOS_REQUEST);
export const getTodosSucess = createAction(types.GET_TODOS_SUCCESS);
export const getTodosFailure = createAction(types.GET_TODOS_FAILURE);

export const addTodosRequest = createAction(types.ADD_TODOS_REQUEST);
export const addTodosSucess = createAction(types.ADD_TODOS_SUCCESS);
export const addTodosFailure = createAction(types.ADD_TODOS_FAILURE);

export const deleteTodosRequest = createAction(types.DELETE_TODOS_REQUEST);
export const deleteTodosSucess = createAction(types.DELETE_TODOS_SUCCESS);
export const deleteTodosFailure = createAction(types.DELETE_TODOS_FAILURE);

export const toggleTodosRequest = createAction(types.TOGGLE_TODOS_REQUEST);
export const toggleTodosSucess = createAction(types.TOGGLE_TODOS_SUCCESS);
export const toggleTodosFailure = createAction(types.TOGGLE_TODOS_FAILURE);
