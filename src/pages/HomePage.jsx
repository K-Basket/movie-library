import { Link, useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();

  return (
    <>
      <h1>Home pages</h1>
      <p>Home page content</p>

      <Link to={`movies/id`} state={{ from: location }}>
        <h3 style={{ color: 'green' }}>Movie Card (id)</h3>
      </Link>
    </>
  );
};

export default HomePage;
