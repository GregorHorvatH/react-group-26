import types from './types';

export const onDecrement = (payload) => ({
  type: types.DECREMENT,
  payload,
});

export const onIncrement = (payload) => ({
  type: types.INCREMENT,
  payload,
});

export const onSetStep = (payload) => ({
  type: types.SET_STEP,
  payload,
});
