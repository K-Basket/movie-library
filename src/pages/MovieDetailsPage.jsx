import { useLocation, useParams } from 'react-router-dom';
import { useGetMovieByIdQuery } from 'redux/moviesSlice';
import { BtnGoToBack } from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
  const location = useLocation();
  const { id: movieId } = useParams();

  const { data, isLoading, error } = useGetMovieByIdQuery(movieId);

  if (isLoading && !error)
    return <h1 style={{ fontSize: '30px', color: 'salmon' }}>...loading...</h1>;

  if (!data) return;

  const { id, original_title, title, poster_path } = data;
  const { history } = window;

  return (
    <>
      <p>Movie Details pages</p>

      {history.state.idx === 0 ? (
        <BtnGoToBack to={location.state?.from ?? '/home'}>
          Go to back
        </BtnGoToBack>
      ) : (
        <BtnGoToBack onClick={() => history.back()}>Go to back</BtnGoToBack>
      )}

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
