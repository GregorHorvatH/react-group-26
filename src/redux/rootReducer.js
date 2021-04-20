import { combineReducers } from 'redux';
import counter from './counter/reducer';
import todos from './todos/reducer';

export default combineReducers({
  counter,
  todos,
});
