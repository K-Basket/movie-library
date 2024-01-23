// import { Link, useLocation } from 'react-router-dom';

import { MovieGallery } from 'components/MovieGallery';
import { useMoviesContext } from 'redux/Context';

const MoviesPage = () => {
  const { moviesFavorites, moviesQueue } = useMoviesContext();

  return (
    <>
      <MovieGallery
        title={[`Movies`, `My Favorite`]}
        dataMovies={moviesFavorites}
        route="/movies/"
      />

      <MovieGallery
        title={[`Movies`, `My Queue`]}
        dataMovies={moviesQueue}
        route="/movies/"
      />
    </>
  );
};

export default MoviesPage;
