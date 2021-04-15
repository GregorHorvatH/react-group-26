import { useState } from 'react';
import PropTypes from 'prop-types';

const Toggler = ({ children }) => {
  const [isOpen, setIsOpen] = useState();

  const toggle = () => setIsOpen((prev) => !prev);

  return children({
    isOpen,
    toggle,
  });
};

Toggler.propTypes = {
  children: PropTypes.func,
};

export default Toggler;
