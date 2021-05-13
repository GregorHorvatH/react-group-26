import axios from 'axios';
import { toast } from 'react-toastify';
import {
  onLoginRequest,
  onLoginSuccess,
  onLoginFailure,
  onLogoutRequest,
  onLogoutSuccess,
  onLogoutFailure,
  onGetUserRequest,
  onGetUserSuccess,
  onGetUserFailure,
  onGetUserCancel,
} from './index';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/users';

const setToken = (token) => {
  axios.defaults.headers.common['Authorization'] = token;
};

export const login = (payload) => (dispatch, getState) => {
  dispatch(onLoginRequest());

  axios
    .post('/login', payload)
    .then(({ data }) => {
      setToken(data.token);
      dispatch(onLoginSuccess(data));
    })
    .catch((error) => {
      toast.error(error.message);
      dispatch(onLoginFailure(error.message));
    });
};

export const logout = () => (dispatch, getState) => {
  dispatch(onLogoutRequest());

  axios
    .post('/logout')
    .then(() => dispatch(onLogoutSuccess()))
    .catch((error) => {
      toast.error(error.message);
      dispatch(onLogoutFailure(error.message));
    });
};

export const getCurrentUser = () => (dispatch, getState) => {
  const state = getState();
  const { token } = state.user;

  if (!token) {
    dispatch(onGetUserCancel());
    return;
  }

  dispatch(onGetUserRequest());
  setToken(token);

  axios
    .get('/current')
    .then(({ data }) => dispatch(onGetUserSuccess(data)))
    .catch((error) => {
      toast.error(error.message);
      setToken('');
      dispatch(onGetUserFailure(error.message));
    });
};
