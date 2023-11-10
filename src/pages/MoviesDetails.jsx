import { Link, useLocation } from 'react-router-dom';

const MoviesDetails = () => {
  const location = useLocation();

  return (
    <>
      <h1>MoviesDetails pages</h1>

      <Link to={location.state?.from ?? '/home'}>Go back</Link>
    </>
  );
};

export default MoviesDetails;
