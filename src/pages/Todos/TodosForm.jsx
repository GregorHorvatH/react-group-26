import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { addTodo } from '../../redux/todos/actions';
import { addTodo } from '../../redux/todos/operations';
import { getIsLoading } from '../../redux/todos/selectors';

const TodosForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const [value, setValue] = useState('');

  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      // id: Date.now(),
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
        <input
          type="text"
          value={value}
          disabled={isLoading}
          onChange={handleChange}
        />
        <button type="submit" disabled={isLoading}>
          + Add Todo
        </button>
      </fieldset>
    </form>
  );
};

export default TodosForm;
