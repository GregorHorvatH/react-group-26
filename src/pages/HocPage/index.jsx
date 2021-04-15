import TestComponent from './TestComponent';
import Toggler from './Toggler';

const HocPage = () => {
  return (
    <div className="hoc">
      <h2>HOC Demo</h2>

      <TestComponent a={5} b={6} />

      <Toggler>
        {({ isOpen, toggle }) => (
          <>
            <button onClick={toggle}>Toggle</button>

            {isOpen && <TestComponent />}
          </>
        )}
      </Toggler>
    </div>
  );
};

export default HocPage;
