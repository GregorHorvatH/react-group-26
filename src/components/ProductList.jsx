import ProductItem from './ProductItem';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 10,
  },
});

const ProductList = ({ products, onDelete }) => {
  const classes = useStyles();

  return (
    <ul className={classes.list}>
      {products.map((product) =>
        product.count ? (
          <ProductItem key={product.id} product={product} onDelete={onDelete} />
        ) : null,
      )}
    </ul>
  );
};

export default ProductList;
