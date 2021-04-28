// import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Badge from '@material-ui/core/Badge';
import styles from './styles.module.css';
// import { getCart } from '../../utils/productsApi';

const getTodosCount = (state) => state.todos.items;

const Header = () => {
  // const [cart, setCart] = useState([]);
  const todos = useSelector(getTodosCount);

  // useEffect(() => {
  //   getCart().then((data) => setCart(data));
  // }, []);

  console.log('render header');

  return (
    <div className={styles.header}>
      <p>header</p>
      <IconButton>
        <Badge badgeContent={todos.length} color="primary">
          <ShoppingCartOutlinedIcon />
        </Badge>
      </IconButton>
    </div>
  );
};

export default Header;
