import { Link, useLocation, useParams } from 'react-router-dom';
import { useGetMovieByIdQuery } from 'redux/moviesSlice';

const MovieDetailsPage = () => {
  const location = useLocation();
  const { id: movieId } = useParams();

  const { data, isLoading, error } = useGetMovieByIdQuery(movieId);

  if (isLoading && !error) {
    return <h1>...loading...</h1>;
  }

  if (!data) return;

  const { id, original_title, title, poster_path } = data;

  return (
    <>
      <p>Movie Details pages</p>

      <Link
        to={location.state?.from ?? '/home'}
        style={{ fontSize: '30px', color: 'blue' }}
      >
        Go back
      </Link>
      {/* <button onClick={() => window.history.back()}>Go Back</button> */}

      <h1>{original_title}</h1>
      <p>Id backend: {id}</p>
      <p>Id from useParams: {movieId}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        width="300"
      />
    </>
  );
};

export default MovieDetailsPage;
