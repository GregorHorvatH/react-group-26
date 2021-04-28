import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodo } from '../../../redux/todosAPI';
import './styles.scss';

class TodoItem extends Component {
  render() {
    const { todo, onDelete, onCheck } = this.props;
    const { color, text, isDone = false } = todo;

    return (
      <li className="todo-item" style={{ backgroundColor: color }}>
        <span>{text}</span>
        <div className="controls">
          <input
            type="checkbox"
            checked={isDone}
            onChange={() =>
              onCheck({
                ...todo,
                isDone: !todo.isDone,
              })
            }
          />
          <button onClick={onDelete}>x</button>
        </div>
      </li>
    );
  }
}

const mapStateToProps = ({ todos: { items } }, { id }) => ({
  todo: items.find((item) => item.id === id),
});

const mapDispatchToProps = (dispatch, { id }) => ({
  onDelete: () => dispatch(deleteTodo(id)),
  onCheck: (todo) => dispatch(toggleTodo(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
