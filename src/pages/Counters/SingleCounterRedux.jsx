import React from 'react';
import { connect } from 'react-redux';
import { createUseStyles } from 'react-jss';
import * as actions from '../../redux/counter/actions';

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

const SingleCounterRedux = ({
  value,
  step,
  onChangeStep,
  onDecrement,
  onIncrement,
}) => {
  const classes = useStyles();

  const handleChangeStep = (e) => onChangeStep(Number(e.target.value));
  const handleDecrement = () => onDecrement(step);
  const handleIncrement = () => onIncrement(step);

  return (
    <div className={classes.counter}>
      <h4>Single Counter Redux</h4>

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

const mapStateToProps = ({ counter: { value, step } }) => ({
  value,
  step,
});

export default connect(mapStateToProps, actions)(SingleCounterRedux);
