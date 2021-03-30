import { routes } from '../routes';

const Menu = () => {
  return (
    <div className="menu">
      <p>menu</p>

      {routes.map(({ path, label }) => (
        <a key={path} href={path}>
          {label}
        </a>
      ))}
    </div>
  );
};

export default Menu;
