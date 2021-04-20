import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const getTodos = (state) => state.todos.items;

const TodosList = () => {
  const todos = useSelector(getTodos);

  return (
    <ul className="todos-list">
      {todos.map(({ id }) => (
        <TodoItem key={id} id={id} />
      ))}
    </ul>
  );
};

export default TodosList;
