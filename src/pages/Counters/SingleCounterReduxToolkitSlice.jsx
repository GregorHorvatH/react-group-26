import { connect } from 'react-redux';
import SingleCounter from './SingleCounter';
import * as actions from '../../redux/counterToolkitSlice';

const mapStateToProps = ({ counterToolkitSlice: { value, step } }) => ({
  value,
  step,
});

export default connect(mapStateToProps, actions)(SingleCounter);
