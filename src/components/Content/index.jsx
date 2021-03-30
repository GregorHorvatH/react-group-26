import { routes } from '../routes';

const Content = () => {
  const { pathname } = window.location;

  return (
    <div className="content">
      {routes.map(({ path, component: Component }) =>
        pathname === path ? <Component key={path} /> : null,
      )}
    </div>
  );
};

export default Content;
