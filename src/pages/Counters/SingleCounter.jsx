import React from 'react';
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

const SingleCounter = ({
  value,
  step,
  onSetStep,
  onDecrement,
  onIncrement,
}) => {
  const classes = useStyles();

  const handleChangeStep = (e) => onSetStep(Number(e.target.value));
  const handleDecrement = () => onDecrement(step);
  const handleIncrement = () => onIncrement(step);

  console.log('render counter');

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
        <p data-testid="value">{value}</p>
        <button
          className={classes.button}
          data-testid="increment-button"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <hr />
    </div>
  );
};

export default SingleCounter;

export const sum = (a = 0, b = 0) => a + b;
