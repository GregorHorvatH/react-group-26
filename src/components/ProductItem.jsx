import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
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
  green: {
    '&.MuiPaper-root': {
      backgroundColor: 'green',
    },
  },
});

const ProductItem = ({ product, onDelete }) => {
  const x = 15;
  const classes = useStyles(x);

  const handleDelete = () => onDelete(product.id);

  return (
    <li className={classes.item}>
      <CardActionArea>
        <Card
          className={[
            classes.card,
            product.insurance ? classes.green : '',
          ].join(' ')}
        >
          <p>name: {product.name}</p>
          <p>price: {product.price}</p>
          <p>count: {product.count}</p>
          <p>color: {product.color || '--'}</p>
          <p>A/I: {product?.insurance?.toString() || '--'}</p>
          <p>I/S: {product?.software?.toString() || '--'}</p>
          <img
            className={classes.image}
            src={loadImage(product.img)}
            alt={product.name}
          />
        </Card>
      </CardActionArea>

      <div className="icons">
        <IconButton>
          <AddShoppingCartOutlinedIcon />
        </IconButton>

        <IconButton onClick={handleDelete}>
          <DeleteForeverOutlinedIcon />
        </IconButton>
      </div>
    </li>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number,
    color: PropTypes.string,
    insurance: PropTypes.bool,
    software: PropTypes.bool,
    img: PropTypes.string,
  }),
};

export default ProductItem;
