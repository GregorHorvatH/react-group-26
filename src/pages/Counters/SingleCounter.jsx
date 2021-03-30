import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  counter: {
    padding: 10,
  },
  buttons: {
    display: 'flex',
  },
  button: {
    '&:hover': {
      backgroundColor: 'red',
    },
  },
});

const limit = 500;

const SingleCounter = ({ initialValue = 0 }) => {
  const classes = useStyles();
  const [value, setValue] = useState(initialValue);
  const [step, setStep] = useState(1);

  const handleDecrement = () =>
    setValue((prevState) => (prevState - step < 0 ? 0 : prevState - step));

  const handleIncrement = () =>
    setValue((prevState) =>
      prevState + step > limit ? limit : prevState + step,
    );

  const handleChangeStep = (e) => setStep(Number(e.target.value));

  useEffect(() => {
    console.log('value:', value);
  }, [value]);

  return (
    <div className={classes.counter}>
      <h4>Single Counter</h4>

      <label>
        <span>step</span>
        <select value={step} onChange={handleChangeStep}>
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
      </label>

      <div className={classes.buttons}>
        <button className={classes.button} onClick={handleDecrement}>
          -
        </button>
        <p>{value}</p>
        <button className={classes.button} onClick={handleIncrement}>
          +
        </button>
      </div>
      <hr />
    </div>
  );
};

export default SingleCounter;

// class MyComponent extends React.Component {
//   render() {
//     return (
//       <div className="my-component"></div>
//     );
//   }
// }

// MyComponent.propTypes = {};
// MyComponent.defaultProps = {};

// export default MyComponent;
