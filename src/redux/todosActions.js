import { createAction } from '@reduxjs/toolkit';

export const setAscFilter = createAction('SET_ASC_FILTER');
export const setDescFilter = createAction('SET_DESC_FILTER');
export const cleanTodoError = createAction('CLEAN_TODO_ERROR');

export const getTodosRequest = createAction('GET_TODOS_REQUEST');
export const getTodosSuccess = createAction('GET_TODOS_SUCCESS');
export const getTodosFailure = createAction('GET_TODOS_FAILURE');

export const addTodoRequest = createAction('ADD_TODO_REQUEST');
export const addTodoSuccess = createAction('ADD_TODO_SUCCESS');
export const addTodoFailure = createAction('ADD_TODO_FAILURE');

export const deleteTodoRequest = createAction('DELETE_TODO_REQUEST');
export const deleteTodoSuccess = createAction('DELETE_TODO_SUCCESS');
export const deleteTodoFailure = createAction('DELETE_TODO_FAILURE');

export const toggleTodoRequest = createAction('TOGGLE_TODO_REQUEST');
export const toggleTodoSuccess = createAction('TOGGLE_TODO_SUCCESS');
export const toggleTodoFailure = createAction('TOGGLE_TODO_FAILURE');
