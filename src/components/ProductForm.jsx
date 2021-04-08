import { useState } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  productForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    display: 'flex',
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  error: {
    color: 'red',
  },
  fieldset: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const initialState = {
  name: '',
  price: '',
  count: '',
  color: 'white',
  image: 'phone',
  insurance: false,
  software: false,
};

const ProductForm = ({ onSubmit }) => {
  const classes = useStyles();
  // const [name, setName] = useState('');
  // const [price, setPrice] = useState('');
  // const [count, setCount] = useState('');
  // const [image, setImage] = useState('phone');
  const [state, setState] = useState(initialState);
  const [error, setError] = useState('');
  const { name, price, count, color, image, insurance, software } = state;

  const handleSubmit = (e) => {
    e.preventDefault();

    // const hasEmptyField = Object.values(state).some((item) => !item);
    // if (hasEmptyField) {
    //   setError('Fields are required');

    //   return;
    // }

    const newItem = {
      // id: Date.now(), // uuid
      name,
      price: Number(price),
      count: Number(count),
      color,
      insurance,
      software,
      img: image,
    };

    onSubmit(newItem);
    setState(initialState);
    setError('');
  };

  // const handleChangeName = (e) => setName(e.target.value);
  // const handleChangePrice = (e) => setPrice(e.target.value);
  // const handleChangeCount = (e) => setCount(e.target.value);
  // const handleChangeImage = (e) => setImage(e.target.value);

  const handleChange = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  return (
    <form className={classes.productForm} onSubmit={handleSubmit}>
      <label className={classes.label}>
        <span>Name:</span>
        <input
          type="text"
          className={classes.input}
          value={name}
          name="name"
          onChange={handleChange}
        />
      </label>

      <label className={classes.label}>
        <span>Price:</span>
        <input
          type="number"
          className={classes.input}
          value={price}
          name="price"
          onChange={handleChange}
        />
      </label>

      <label className={classes.label}>
        <span>Count:</span>
        <input
          type="number"
          className={classes.input}
          value={count}
          name="count"
          onChange={handleChange}
        />
      </label>

      <label className={classes.label}>
        <span>Image:</span>
        <select
          className={classes.input}
          value={image}
          name="image"
          onChange={handleChange}
        >
          <option value="phone">phone</option>
          <option value="notebook">notebook</option>
        </select>
      </label>

      <fieldset className={classes.fieldset}>
        <legend>color</legend>

        <label>
          <span>white</span>
          <input
            type="radio"
            name="color"
            value="white"
            checked={color === 'white'}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>gray</span>
          <input
            type="radio"
            name="color"
            value="gray"
            checked={color === 'gray'}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>black</span>
          <input
            type="radio"
            name="color"
            value="black"
            checked={color === 'black'}
            onChange={handleChange}
          />
        </label>
      </fieldset>

      <fieldset className={classes.fieldset}>
        <legend>color</legend>

        <label>
          <span>Advanced insurance (12M)</span>
          <input
            type="checkbox"
            checked={insurance}
            name="insurance"
            onChange={handleCheckboxChange}
          />
        </label>

        <label>
          <span>Install software</span>
          <input
            type="checkbox"
            checked={software}
            name="software"
            onChange={handleCheckboxChange}
          />
        </label>
      </fieldset>

      {error && <p className={classes.error}>{error}</p>}

      <button type="submit">+ Add</button>
    </form>
  );
};

export default ProductForm;
