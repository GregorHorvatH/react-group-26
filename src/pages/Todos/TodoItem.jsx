import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../../redux/todos/operations';

const getTodoItem = (id) => (state) =>
  state.todos.items.find((todo) => todo.id === id);

const TodoItem = ({ id }) => {
  const dispatch = useDispatch();
  const todo = useSelector(getTodoItem(id));
  const { text, created, isDone } = todo;

  const handleToggle = () =>
    dispatch(
      toggleTodo({
        ...todo,
        isDone: !isDone,
      }),
    );
  const handleDelete = () => dispatch(deleteTodo(id));

  return (
    <li>
      <button onClick={handleDelete}>x</button>

      <p>text: {text}</p>
      <p>created: {moment(created).format('YYYY/MM/DD hh:mm:ss')}</p>
      <label>
        <span>is done</span>
        <input type="checkbox" checked={isDone} onChange={handleToggle} />
      </label>
    </li>
  );
};

export default TodoItem;
