import { connect } from 'react-redux';
import SingleCounter from './SingleCounter';
import * as actions from '../../redux/counterToolkit/actions';

const mapStateToProps = ({ counterToolkit: { value, step } }) => ({
  value,
  step,
});

export default connect(mapStateToProps, actions)(SingleCounter);
