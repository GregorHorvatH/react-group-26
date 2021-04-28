import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActions from '../../redux/counterActions';

import './styles.scss';

const options = [1, 5, 10, 15, 50];

const Counter = ({ value, step, onDecrement, onIncrement, setStep }) => {
  console.log('render counter');

  return (
    <div className="counter">
      <h2 className="title">Counter</h2>
      <div className="controls">
        <button className="button" onClick={() => onDecrement(step)}>
          -
        </button>
        <p className="value">{value}</p>
        <button className="button" onClick={() => onIncrement(step)}>
          +
        </button>
      </div>

      <select
        className="step"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      >
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: state.counter.value,
  step: state.counter.step,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      onDecrement: counterActions.decrement,
      onIncrement: counterActions.increment,
      setStep: counterActions.setStep,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
