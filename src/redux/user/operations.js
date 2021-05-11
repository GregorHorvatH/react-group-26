import axios from 'axios';
import { toast } from 'react-toastify';
import {
  onLoginRequest,
  onLoginSuccess,
  onLoginFailure,
  onLogoutRequest,
  onLogoutSuccess,
  onLogoutFailure,
} from './index';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/users';

export const login = (payload) => (dispatch, getState) => {
  dispatch(onLoginRequest());

  axios
    .post('/login', payload)
    .then(({ data }) => dispatch(onLoginSuccess(data)))
    .catch((error) => {
      toast.error(error.message);
      dispatch(onLoginFailure(error.message));
    });
};

export const logout = (payload) => (dispatch, getState) => {
  dispatch(onLogoutRequest());

  axios
    .post('/logout', payload)
    .then(() => dispatch(onLogoutSuccess()))
    .catch((error) => {
      toast.error(error.message);
      dispatch(onLogoutFailure(error.message));
    });
};
