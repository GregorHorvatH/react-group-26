import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import Menu from './components/Menu';
import Content from './components/Content';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import { getCurrentUser } from './redux/user/operations';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isAuthorizing);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div className="shop">
      <Header />

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="body">
          <Menu />
          <Content />
        </div>
      )}
      <Footer />

      <ToastContainer />
    </div>
  );
};

export default App;
