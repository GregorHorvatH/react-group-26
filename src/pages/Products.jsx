import { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

const Products = () => {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newItem) => {
    setProducts((prev) => [...prev, newItem]);
  };

  // componentDidMount
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('products'));

    setProducts(data);
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  return (
    <div className="products">
      <ProductForm onSubmit={handleAddProduct} />

      <ProductList products={products} />
    </div>
  );
};

export default Products;
