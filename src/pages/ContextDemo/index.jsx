import { useState } from 'react';
import TestComponent1 from './TestComponent1';
import Context from './context';

const ContextDemo = () => {
  const [value, setValue] = useState(12);

  const increment = () => setValue((prev) => prev + 1);

  return (
    <Context.Provider value={{ value, increment }}>
      <div className="context-demo">
        <h1>Context Demo</h1>

        <TestComponent1 />
      </div>
    </Context.Provider>
  );
};

export default ContextDemo;
