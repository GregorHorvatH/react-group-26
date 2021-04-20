import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todos/actions';

const TodosForm = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      text: value,
      created: Date.now(),
      isDone: false,
    };

    dispatch(addTodo(newTodo));
    setValue('');
  };

  return (
    <form className="todos-form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>create new todo</legend>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">+ Add Todo</button>
      </fieldset>
    </form>
  );
};

export default TodosForm;
