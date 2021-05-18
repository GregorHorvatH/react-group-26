import { useState, useReducer } from 'react';
import Counter from './Counter';
import Context from './counterContext';

const initialState = {
  value: 10,
};

const counterReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'counter/increment':
      return {
        ...state,
        value: state.value + 1,
      };

    case 'counter/decrement':
      return {
        ...state,
        value: state.value - 1,
      };

    default:
      return state;
  }
};

const Hooks = () => {
  // const [value, setValue] = useState(33);

  // const increment = () => setValue((prev) => prev + 1);
  // const decrement = () => setValue((prev) => prev - 1);

  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="hooks">
      <h1>Hooks</h1>

      <Context.Provider
        value={{
          state,
          dispatch,
        }}
      >
        <Counter a={1} b={2} />
      </Context.Provider>
    </div>
  );
};

export default Hooks;
