import { useState, useEffect } from 'react';
import CounterList from './CounterList';
import SingleCounter from './SingleCounter';
import SingleCounterRedux from './SingleCounterRedux';

const Counters = () => {
  const [counters, setCounters] = useState([]);

  // component did mount
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('counters'));

    setCounters(data);
  }, []);

  // component did update - after data update
  useEffect(() => {
    localStorage.setItem('counters', JSON.stringify(counters));
  }, [counters]);

  // component did update - always after render
  useEffect(() => {
    // console.log('render');
  });

  const addCounter = () =>
    setCounters((prevState) => [
      ...prevState,
      {
        id: Date.now(),
        value: 0,
      },
    ]);

  const handleIncrement = (id) =>
    setCounters((prevState) =>
      prevState.map((counter) =>
        counter.id === id
          ? {
              ...counter,
              value: counter.value + 1,
            }
          : counter,
      ),
    );

  const handleDecrement = (id) =>
    setCounters((prevState) =>
      prevState.map((counter) =>
        counter.id === id
          ? {
              ...counter,
              value: counter.value - 1,
            }
          : counter,
      ),
    );

  const handleDeleteCounter = (id) =>
    setCounters((prevState) =>
      prevState.filter((counter) => counter.id !== id),
    );

  return (
    <div className="counters">
      <h2>Counters</h2>
      <SingleCounterRedux />
      {/* <SingleCounter initialValue={555} /> */}

      {/* <button onClick={addCounter}>+ Add counter</button>

      <CounterList
        counters={counters}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDeleteCounter}
      /> */}
    </div>
  );
};

export default Counters;
