import React from 'react';
import TodoItem from '../TodoItem';

import './styles.scss';

const TodoList = ({ items, name }) => {
  console.log(`render ${name} todo list`);

  return (
    <ul className="todo-list">
      {items.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
