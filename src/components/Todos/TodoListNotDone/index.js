import { connect } from 'react-redux';
import TodoList from '../TodoList';
import { getNotDoneTodos } from '../../../redux/selectors';

const mapStateToProps = (state) => ({
  items: getNotDoneTodos(state),
  name: 'NOT DONE',
});

export default connect(mapStateToProps)(TodoList);
