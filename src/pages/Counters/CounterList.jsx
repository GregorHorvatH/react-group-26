import CounterItem from './CounterItem';

const CounterList = ({ counters, onIncrement, onDecrement, onDelete }) => (
  <ul className="counter-list">
    {counters.map((counter) => (
      <CounterItem
        key={counter.id}
        counter={counter}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
      />
    ))}
  </ul>
);

export default CounterList;
