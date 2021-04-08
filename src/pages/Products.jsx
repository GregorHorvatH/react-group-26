import { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';
import { getProducts, addProduct, deleteProduct } from '../utils/productsApi';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleAddProduct = (newItem) => {
    // setProducts((prev) => [...prev, newItem]);

    setIsLoading(true);

    addProduct(newItem)
      .then((data) => setProducts((prev) => [...prev, data]))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  const handleDeleteProduct = (id) => {
    setIsLoading(true);

    deleteProduct(id)
      .then(() => setProducts((prev) => prev.filter((item) => item.id !== id)))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  // componentDidMount
  useEffect(() => {
    // const data = JSON.parse(localStorage.getItem('products'));

    setIsLoading(true);

    getProducts()
      .then((data) => setProducts(data))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  // useEffect(() => {
  //   localStorage.setItem('products', JSON.stringify(products));
  // }, [products]);

  return (
    <div className="products">
      <ProductForm onSubmit={handleAddProduct} />

      {error && (
        <p>
          {error} <button onClick={() => setError(undefined)}>x</button>
        </p>
      )}

      {isLoading && <p>Loading...</p>}
      <ProductList products={products} onDelete={handleDeleteProduct} />
    </div>
  );
};

export default Products;
