import notebook from '../assets/notebook.jpeg';
import phone from '../assets/phone.jpeg';

const images = {
  notebook,
  phone,
};

const ProductItem = ({ product }) => (
  <li className="item">
    <p>name: {product.name}</p>
    <p>price: {product.price}</p>
    <p>count: {product.count}</p>
    <img src={images[product.img]} alt={product.name} />
  </li>
);

export default ProductItem;
