import { Link, useLocation } from 'react-router-dom';

const Movies = () => {
  const location = useLocation();

  return (
    <>
      <h1>Movies pages</h1>
      <button type="button">watched</button>
      <button type="button">queue</button>

      <Link to={`id`} state={{ from: location }}>
        <h3 style={{ color: 'salmon' }}>Link</h3>
      </Link>
    </>
  );
};

export default Movies;
