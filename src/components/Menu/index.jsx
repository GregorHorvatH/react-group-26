import { useSelector } from 'react-redux';
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
  const isLoggedOn = useSelector((state) => state.user.isLoggedOn);

  return (
    <div className="menu">
      <p>menu</p>

      {routes.map(({ path, exact, showInMenu, label, isProtected }) =>
        showInMenu && (!isProtected || (isProtected && isLoggedOn)) ? (
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
    </div>
  );
};

export default Menu;
