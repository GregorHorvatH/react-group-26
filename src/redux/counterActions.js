import { createAction } from '@reduxjs/toolkit';

export const increment = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');
export const setStep = createAction('SET_STEP');
