import React from 'react';
import { connect } from 'react-redux';
import { setAscFilter, setDescFilter } from '../../../redux/todosActions';

const FIlters = ({ value, onAsc, onDesc }) => {
  return (
    <div className="filters">
      <label>
        <span>asc</span>
        <input
          className="button"
          type="radio"
          value="asc"
          checked={value === 'asc'}
          onChange={() => onAsc()}
        />
      </label>
      <label>
        <span>desc</span>
        <input
          className="button"
          type="radio"
          value="desc"
          checked={value === 'desc'}
          onChange={() => onDesc()}
        />
      </label>
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: state.todos.filter,
});

const mapDispatchToProps = {
  onAsc: setAscFilter,
  onDesc: setDescFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(FIlters);
