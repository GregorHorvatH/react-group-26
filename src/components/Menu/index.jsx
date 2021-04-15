import { NavLink } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { routes } from '../routes';

const useStyles = createUseStyles({
  active: {
    backgroundColor: 'blue',
    color: 'white',
  },
});

const Menu = () => {
  const classes = useStyles();

  return (
    <div className="menu">
      <p>menu</p>

      {routes.map(({ path, exact, showInMenu, label }) =>
        showInMenu ? (
          <NavLink
            activeClassName={classes.active}
            key={path}
            exact={exact}
            to={path}
          >
            {label}
          </NavLink>
        ) : null,
      )}

      {/* <Link to="/products">Products</Link>
      <Link to="/contacts">Contacts</Link> */}
    </div>
  );
};

export default Menu;
