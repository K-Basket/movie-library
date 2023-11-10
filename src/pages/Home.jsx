import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();

  return (
    <>
      <h1>Home pages</h1>

      <Link to={`movies/id`} state={{ from: location }}>
        <h3 style={{ color: 'salmon' }}>Link</h3>
      </Link>
    </>
  );
};

export default Home;
