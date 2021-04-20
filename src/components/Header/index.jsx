import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Badge from '@material-ui/core/Badge';
import styles from './styles.module.css';
import { getCart } from '../../utils/productsApi';

const getTodosCount = (state) => state.todos.items.length;

const Header = () => {
  const [cart, setCart] = useState([]);
  const count = useSelector(getTodosCount);

  useEffect(() => {
    getCart().then((data) => setCart(data));
  }, []);

  return (
    <div className={styles.header}>
      <p>header</p>
      <IconButton>
        <Badge badgeContent={count} color="primary">
          <ShoppingCartOutlinedIcon />
        </Badge>
      </IconButton>
    </div>
  );
};

export default Header;
