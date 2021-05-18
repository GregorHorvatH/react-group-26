import { useContext, useEffect, useCallback, useMemo, useRef } from 'react';
import Context from './counterContext';

const sum = (a, b) => a + b;

const Counter = ({ a, b }) => {
  const { state, dispatch } = useContext(Context);
  const inputRef = useRef(null);

  const c = useMemo(() => sum(a, b), [a, b]);

  const handleIncrement = useCallback(
    () => dispatch({ type: 'counter/increment' }),
    [dispatch],
  );
  const handleDecrement = useCallback(
    () => dispatch({ type: 'counter/decrement' }),
    [dispatch],
  );

  const handleSubmit = () => {
    console.log('data:', inputRef.current.value);
  };

  useEffect(() => {
    console.log('handleIncrement or handleDecrement is changed');
  }, [handleIncrement, handleDecrement, c]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="counter">
      <button onClick={handleDecrement}>-</button>
      <p>{state.value}</p>
      <button onClick={handleIncrement}>+</button>

      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default Counter;
