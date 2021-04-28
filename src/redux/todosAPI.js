import axios from 'axios';
import * as actions from './todosActions';

axios.defaults.baseURL = 'http://localhost:3030';

export const getTodos = () => (dispatch) => {
  dispatch(actions.getTodosRequest());

  axios
    .get('/todos')
    .then(({ data }) => dispatch(actions.getTodosSuccess(data)))
    .catch(({ message }) => dispatch(actions.getTodosFailure(message)));
};

export const addTodo = (item) => (dispatch) => {
  dispatch(actions.addTodoRequest());

  axios
    .post('/todos', item)
    .then(({ data }) => dispatch(actions.addTodoSuccess(data)))
    .catch(({ message }) => dispatch(actions.addTodoFailure(message)));
};

export const deleteTodo = (id) => (dispatch) => {
  dispatch(actions.deleteTodoRequest());

  axios
    .delete(`/todos/${id}`)
    .then(() => dispatch(actions.deleteTodoSuccess(id)))
    .catch(({ message }) => dispatch(actions.deleteTodoFailure(message)));
};

export const fetchSettings = () => (dispatch) => {
  axios
    .get('/settings')
    .then(({ data }) => localStorage.setItem('settings', JSON.stringify(data)))
    .catch(({ message }) => dispatch(actions.deleteTodoFailure(message)));
};

export const toggleTodo = (todo) => (dispatch) => {
  dispatch(actions.toggleTodoRequest());

  axios
    .patch(`/todos/${todo.id}`, { isDone: todo.isDone })
    .then(() => dispatch(actions.toggleTodoSuccess(todo)))
    .catch(({ message }) => dispatch(actions.toggleTodoFailure(message)));
};
