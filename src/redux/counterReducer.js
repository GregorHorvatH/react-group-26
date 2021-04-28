import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './counterActions';

const initialState = {
  value: 0,
  step: 1,
};

const increment = (state, { payload: step }) => state + step;
const decrement = (state, { payload: step }) => state - step;
const setStep = (_, { payload: step }) => step;

const value = createReducer(initialState.value, {
  [actions.increment.type]: increment,
  [actions.decrement.type]: decrement,
});

const step = createReducer(initialState.step, {
  [actions.setStep.type]: setStep,
});

export default combineReducers({
  value,
  step,
});
