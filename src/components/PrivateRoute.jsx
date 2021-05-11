import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
  const isLoggedOn = useSelector((state) => state.user.isLoggedOn);

  return isLoggedOn ? <Route {...props} /> : <Redirect to="/login" />;
};

export default PrivateRoute;
