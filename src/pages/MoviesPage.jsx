import { useEffect, useRef, useState } from 'react';
import { MovieGallery } from 'components/MovieGallery';
import { useMoviesContext } from 'redux/Context';
import { BtnGoTo } from 'components/BtnGoTo';

const MoviesPage = () => {
  const refGallery = useRef();
  const [topPosition, setTopPosition] = useState();
  const { moviesFavorites, moviesQueue, activeMovGallery } = useMoviesContext();

  useEffect(() => {
    const updatePosition = () => {
      const { top } = refGallery.current.getBoundingClientRect();
      setTopPosition(top);
    };

    window.addEventListener('scroll', updatePosition);
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return (
    <div ref={refGallery}>
      {activeMovGallery === 'favorite' && (
        <MovieGallery
          title={[`Movies`, `My Favorite`]}
          dataMovies={moviesFavorites}
          route="/movies/"
        />
      )}

      {activeMovGallery === 'queue' && (
        <MovieGallery
          title={[`Movies`, `My Queue`]}
          dataMovies={moviesQueue}
          route="/movies/"
        />
      )}

      {topPosition < 0 && <BtnGoTo />}
    </div>
  );
};

export default MoviesPage;
