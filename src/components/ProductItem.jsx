import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import { createUseStyles } from 'react-jss';

// import { getImage } from '../utils/imageLoader';
import { loadImage } from '../utils/loadImage';

const useStyles = createUseStyles({
  item: {
    display: 'flex',
    marginBottom: 10,
    alignItems: 'flex-start',
  },

  card: {
    padding: 10,
  },
  image: {
    height: 100,
  },
});

const ProductItem = ({ product }) => {
  const x = 15;
  const classes = useStyles(x);

  return (
    <li className={classes.item}>
      <CardActionArea>
        <Card className={classes.card}>
          <p>name: {product.name}</p>
          <p>price: {product.price}</p>
          <p>count: {product.count}</p>
          <img
            className={classes.image}
            src={loadImage(product.img)}
            alt={product.name}
          />
        </Card>
      </CardActionArea>

      <IconButton>
        <AddShoppingCartOutlinedIcon />
      </IconButton>
    </li>
  );
};

export default ProductItem;
