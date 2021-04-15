import TestComponent2 from './TestComponent2';

const TestComponent1 = () => {
  return (
    <div className="comp-1">
      <h2>component 1</h2>

      <TestComponent2 />
    </div>
  );
};

export default TestComponent1;
