import { combineReducers } from 'redux';
import types from './types';

const initialState = {
  value: 65,
  step: 25,
};

const value = (state = initialState.value, action) => {
  const { payload = 1 } = action;

  switch (action.type) {
    case types.INCREMENT:
      return state + payload;

    case types.DECREMENT:
      return state - payload;

    default:
      return state;
  }
};

const step = (state = initialState.step, action) => {
  const { payload = 1 } = action;

  switch (action.type) {
    case types.SET_STEP:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  value,
  step,
});
