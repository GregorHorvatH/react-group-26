import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TodosForm from './TodosForm';
import TodosList from './TodosList';
import SingleCounterRedux from '../Counters/SingleCounterRedux';
import { getTodos } from '../../redux/todos/operations';

const Todos = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getTodos()), [dispatch]);

  return (
    <div className="todos">
      <h2>Todos</h2>

      <SingleCounterRedux />

      <TodosForm />
      <TodosList />
    </div>
  );
};

export default Todos;
