import React from 'react';
import { connect } from 'react-redux';

const Loader = ({ isLoading }) => isLoading && <h3>Loading...</h3>;

const mapStateToProps = ({ todos: { isLoading } }) => ({
  isLoading,
});

export default connect(mapStateToProps)(Loader);
