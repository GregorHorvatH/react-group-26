import React from 'react';

const areEqual = (prevProps, nextProps) =>
  prevProps.counter.value === nextProps.counter.value;

// memo & PureComponent - shallow check
// props = {
//   value: 5,
//   counter: { x: 45 }
// }
const CounterItem = React.memo(
  ({ counter, onIncrement, onDecrement, onDelete }) => {
    const handleDecrement = () => onDecrement(counter.id);
    const handleIncrement = () => onIncrement(counter.id);
    const handleDelete = () => onDelete(counter.id);

    console.log('render:', counter.id);

    if (counter.value > 10) {
      throw new Error('boooom');
    }

    return (
      <li className="counter-item">
        <button onClick={handleDecrement}>-</button>
        <span>{counter.value}</span>
        <button onClick={handleIncrement}>+</button>

        <button onClick={handleDelete}>x</button>
      </li>
    );
  },
  areEqual,
);

export default CounterItem;
