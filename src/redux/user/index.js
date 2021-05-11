import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  name: '',
  token: '',
  isLoggedOn: false,
  isLoading: false,
  error: '',
};

const { actions, reducer } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    onLoginRequest: (state) => {
      state.isLoading = true;
    },
    onLoginSuccess: (state, action) => {
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isLoggedOn = true;
      state.isLoading = false;
    },
    onLoginFailure: (state, action) => {
      state.error = action.payload.message;
      state.isLoggedOn = false;
      state.isLoading = false;
    },

    onLogoutRequest: (state) => {
      state.isLoading = true;
    },
    onLogoutSuccess: (state) => {
      state = initialState;
      state.isLoading = false;
    },
    onLogoutFailure: (state, action) => {
      state.error = action.payload.message;
      state.isLoading = false;
    },

    onGetUser: (state, action) => {
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.isLoggedOn = true;
      state.isLoading = false;
    },
  },
});

export const {
  onLoginRequest,
  onLoginSuccess,
  onLoginFailure,

  onLogoutRequest,
  onLogoutSuccess,
  onLogoutFailure,

  onGetUser,
} = actions;

export default reducer;
