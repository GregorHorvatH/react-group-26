import Header from './components/Header';
import Menu from './components/Menu';
import Content from './components/Content';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

const App = () => (
  <div className="shop">
    <Header />

    <div className="body">
      <Menu />
      <Content />
    </div>
    <Footer />

    <ToastContainer />
  </div>
);

export default App;
