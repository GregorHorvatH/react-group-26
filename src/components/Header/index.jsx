import { useState, useEffect } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Badge from '@material-ui/core/Badge';
import styles from './styles.module.css';
import { getCart } from '../../utils/productsApi';

const Header = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getCart().then((data) => setCart(data));
  }, []);

  return (
    <div className={styles.header}>
      <p>header</p>
      <IconButton>
        <Badge badgeContent={cart.length} color="primary">
          <ShoppingCartOutlinedIcon />
        </Badge>
      </IconButton>
    </div>
  );
};

export default Header;
