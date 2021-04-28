import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const getTodos = (state) => state.todos.items;

const TodosList = () => {
  const todos = useSelector(getTodos);

  console.log('render todos list');

  return (
    <ul className="todos-list">
      {todos.map(({ id }) => (
        <TodoItem key={id} id={id} />
      ))}
    </ul>
  );
};

export default TodosList;
