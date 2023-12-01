import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useGetCastMovieQuery } from 'redux/moviesSlice';

export const Cast = () => {
  const { id: movieId } = useParams();
  const location = useLocation();
  const { data, isLoading, error } = useGetCastMovieQuery(movieId);
  const [dataCasts, setDataCasts] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (data) {
      const { cast } = data;

      if (isActive) return setDataCasts(cast);

      const res = [];

      for (let i = 0; i < 5; i += 1) {
        if (cast[i]) res.push(cast[i]);
      }
      setDataCasts(res);
    }
  }, [data, isActive]);

  const makeActive = () => {
    setIsActive(!isActive);
  };

  if (isLoading && !error)
    return <h1 style={{ fontSize: '30px', color: 'salmon' }}>...loading...</h1>;

  // if (!data) return;

  return (
    <>
      <ul
        style={{
          margin: '10px 0',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {dataCasts.map(({ id, character, name, popularity, profile_path }) => (
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
      <button type="button" onClick={makeActive}>
        {isActive ? 'see less' : 'see more'}
      </button>
    </>
  );
};
