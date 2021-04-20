import TodosForm from './TodosForm';
import TodosList from './TodosList';

const Todos = () => {
  return (
    <div className="todos">
      <h2>Todos</h2>

      <TodosForm />
      <TodosList />
    </div>
  );
};

export default Todos;
