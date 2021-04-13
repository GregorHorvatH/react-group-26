import { useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Page404 = () => {
  const history = useHistory();

  const handleGoHome = () => {
    history.push({
      pathname: '/',
    });
  };

  return (
    <div className="404">
      <h1>404</h1>
      <p>page not found</p>

      <button onClick={handleGoHome}>Go Home</button>
      {/* <Link to="/">Go Home</Link> */}
    </div>
  );
};

export default Page404;
