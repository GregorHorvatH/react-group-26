import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export const getProducts = () =>
  axios.get('/products').then(({ data }) => data);

export const addProduct = (payload) =>
  axios.post('/products', payload).then(({ data }) => data);

export const deleteProduct = (id) =>
  axios.delete(`/products/${id}`).then(({ data }) => data);

export const getCart = () => axios.get('/cart').then(({ data }) => data);
