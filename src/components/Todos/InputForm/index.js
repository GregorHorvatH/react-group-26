import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
// import * as todosActions from '../../../redux/todosActions';
import { addTodo } from '../../../redux/todosAPI';

import './styles.scss';

const getColor = () => ['#DDD1C7', '#C2CFB2', '#8DB580'][~~(Math.random() * 3)];

const InputForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      color: getColor(),
      text: value,
    });
    setValue('');
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        value={value}
        ref={inputRef}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="button">+ Add</button>
    </form>
  );
};

const mapDispatchToProps = {
  onSubmit: addTodo,
};

export default connect(null, mapDispatchToProps)(InputForm);
