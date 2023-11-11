import { Link, useLocation } from 'react-router-dom';

const MovieDetailsPage = () => {
  const location = useLocation();

  return (
    <>
      <h1>Movie Details pages</h1>

      <Link to={location.state?.from ?? '/home'}>Go back</Link>
    </>
  );
};

export default MovieDetailsPage;
