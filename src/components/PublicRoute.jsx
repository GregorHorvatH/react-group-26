import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

const PublicRoute = (props) => {
  const isLoggedOn = useSelector((state) => state.user.isLoggedOn);
  const { isNotLoggedOn } = props;

  return !isNotLoggedOn || (isNotLoggedOn && !isLoggedOn) ? (
    <Route {...props} />
  ) : null;
};

export default PublicRoute;
