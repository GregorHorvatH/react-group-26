import React from 'react';
import { cleanTodoError } from '../../../redux/todosActions';

const ErrorMessage = ({ errorMessage, cleanTodoError }) =>
  !!errorMessage && (
    <>
      <button onClick={cleanTodoError}>x</button>
      <h3>{errorMessage}</h3>
    </>
  );

const mapStateToProps = ({ todos: { errorMessage } }) => ({ errorMessage });

export default connect(mapStateToProps, { cleanTodoError })(ErrorMessage);
