import Contacts from '../../pages/Contacts';
import Products from '../../pages/Products';

const Content = () => {
  const { pathname } = window.location;

  return (
    <div className="content">
      {pathname === '/products' && <Products />}
      {pathname === '/contacts' && <Contacts />}
    </div>
  );
};

export default Content;
