import { useContext } from 'react';
import Context from './context';

const TestComponent3 = () => {
  const { value, increment } = useContext(Context);

  return (
    <div className="comp-3">
      <h4>component 3</h4>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus totam
        odio eum minus dicta esse aspernatur neque libero. Ducimus quaerat atque
        corrupti officia voluptate error odit id, libero dolorum aspernatur.
      </p>
      <p>value: {value}</p>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default TestComponent3;
