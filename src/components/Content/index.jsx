import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Page404 from '../../pages/Page404';
import { routes } from '../routes';

const Content = () => {
  return (
    <div className="content">
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          {routes.map(({ path, exact, component: Component }) => (
            <Route path={path} exact={exact} component={Component} />
          ))}

          <Route component={Page404} />
        </Switch>
      </Suspense>

      {/* <Switch> */}
      {/* <Route path="/" exact component={HomePage} />
        <Route path="/products" component={Products} />
        <Route path="/contacts" component={Contacts} />
        <Route component={Page404} />
      {/* <Redirect to="/" /> */}
      {/* </Switch> */}
    </div>
  );
};

export default Content;
