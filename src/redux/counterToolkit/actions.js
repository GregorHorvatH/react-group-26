import { createAction } from '@reduxjs/toolkit';

export const onDecrement = createAction('counter/toolkit/decrement');
export const onIncrement = createAction('counter/toolkit/increment');
export const onSetStep = createAction('counter/toolkit/setStep');
