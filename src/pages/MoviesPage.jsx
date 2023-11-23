import { Link, useLocation } from 'react-router-dom';

const MoviesPage = () => {
  const location = useLocation();

  return (
    <>
      <h1>Movies pages</h1>
      <h2>Component MovieGallery</h2>
      <p>render library Watched & Queue</p>

      <Link to={`put-id-movie`} state={{ from: location }}>
        <h3 style={{ color: 'green' }}>Movie Card (id)</h3>
      </Link>
    </>
  );
};

export default MoviesPage;
