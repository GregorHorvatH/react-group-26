import ProductList from '../components/ProductList';

const products = [
  {
    id: 1,
    name: 'phone 1',
    price: 5000,
    count: 10,
    img: 'phone',
  },
  {
    id: 2,
    name: 'phone 2',
    price: 3000,
    count: 8,
    img: 'phone',
  },
  {
    id: 3,
    name: 'phone 3',
    price: 7000,
    count: 0,
    img: 'phone',
  },
  {
    id: 4,
    name: 'notebook',
    price: 27000,
    count: 6,
    img: 'notebook',
  },
];

const Products = () => {
  return (
    <div className="products">
      <ProductList products={products} />
    </div>
  );
};

export default Products;
