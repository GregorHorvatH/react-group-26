import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import Page404 from '../../pages/Page404';
import { routes } from '../routes';

const Content = () => {
  return (
    <div className="content">
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          {routes.map(({ path, exact, isProtected, component: Component }) =>
            isProtected ? (
              <PrivateRoute
                key={path}
                path={path}
                exact={exact}
                component={Component}
              />
            ) : (
              <Route
                key={path}
                path={path}
                exact={exact}
                component={Component}
              />
            ),
          )}
          <Route component={Page404} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default Content;
