import { Link, useLocation, useParams } from 'react-router-dom';
import { useGetMovieByIdQuery } from 'redux/moviesSlice';

const MovieDetailsPage = () => {
  const location = useLocation();
  const { id: movieId } = useParams();

  const { data } = useGetMovieByIdQuery(movieId);

  if (!data) return;

  const { id, original_title, title, poster_path } = data;
  // console.log('data :>> ', data);
  console.log('id movie :>> ', id);

  return (
    <>
      <p>Movie Details pages</p>

      <Link
        to={location.state?.from ?? '/home'}
        style={{ fontSize: '30px', color: 'blue' }}
      >
        Go back
      </Link>

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
