import { connect } from 'react-redux';
import TodoList from '../TodoList';
import { getDoneTodos } from '../../../redux/selectors';

const mapStateToProps = (state) => ({
  items: getDoneTodos(state),
  name: 'DONE',
});

export default connect(mapStateToProps)(TodoList);
