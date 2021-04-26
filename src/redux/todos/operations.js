import axios from 'axios';
import { toast } from 'react-toastify';
import * as actions from './actions';

axios.defaults.baseURL = 'http://localhost:4040';

export const getTodos = () => (dispatch, getState) => {
  dispatch(actions.getTodosRequest());

  axios
    .get('/todos')
    .then(({ data }) => dispatch(actions.getTodosSucess(data)))
    .catch((error) => {
      toast.error(error.message);
      dispatch(actions.getTodosFailure(error.message));
    });
};

export const addTodo = (payload) => (dispatch, getState) => {
  dispatch(actions.addTodosRequest());

  axios
    .post('/todos', payload)
    .then(({ data }) => dispatch(actions.addTodosSucess(data)))
    .catch((error) => {
      toast.error(error.message);
      dispatch(actions.addTodosFailure(error.message));
    });
};

export const deleteTodo = (id) => (dispatch, getState) => {
  dispatch(actions.deleteTodosRequest());

  axios
    .delete(`/todos/${id}`)
    .then(() => dispatch(actions.deleteTodosSucess(id)))
    .catch((error) => {
      toast.error(error.message);
      dispatch(actions.deleteTodosFailure(error.message));
    });
};

export const toggleTodo = (todo) => (dispatch, getState) => {
  dispatch(actions.toggleTodosRequest());

  axios
    .patch(`/todos/${todo.id}`, todo)
    .then(() => dispatch(actions.toggleTodosSucess(todo.id)))
    .catch((error) => {
      toast.error(error.message);
      dispatch(actions.toggleTodosFailure(error.message));
    });
};
