import { Link, useLocation, useParams } from 'react-router-dom';
import { useGetCastMovieQuery } from 'redux/moviesSlice';

export const Cast = () => {
  const { id: movieId } = useParams();
  const location = useLocation();

  const { data, isLoading, error } = useGetCastMovieQuery(movieId);

  if (isLoading && !error)
    return <h1 style={{ fontSize: '30px', color: 'salmon' }}>...loading...</h1>;

  if (!data) return;
  const { cast } = data;

  return (
    <ul
      style={{
        margin: '10px 0',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
    >
      {cast.map(({ id, character, name, popularity, profile_path }) => (
        <li key={id}>
          {
            <Link to={`/actor?id=${id}`} state={{ from: location }}>
              <h2>character: {character}</h2>
              <p>Name cast: {name}</p>
              <p>Popularity: {popularity}</p>
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={character}
                width="150"
              />
            </Link>
          }
        </li>
      ))}
    </ul>
  );
};
