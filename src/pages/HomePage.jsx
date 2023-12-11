import { MovieGallery } from 'components/MovieGallery';
import { createGenresForTrendMovie } from 'helpers/helpers';
import { useMoviesContext } from 'redux/Context';
import { BtnGoTo } from 'components/BtnGoTo';
import { useEffect, useRef, useState } from 'react';

const HomePage = () => {
  const {
    isActiveBtn,
    moviesTrendWeek,
    moviesTrendDay,
    setPageWeek,
    isLoadingTrendWeek,
    errorTrendWeek,
    setPageDay,
    isLoadingTrendDay,
    errorTrendDay,
  } = useMoviesContext();
  const refGallery = useRef();
  const [topPosition, setTopPosition] = useState();

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
      {isActiveBtn && (
        <MovieGallery
          title="Popular films of the Week"
          dataMovies={moviesTrendWeek}
          isLoading={isLoadingTrendWeek}
          error={errorTrendWeek}
          setPage={setPageWeek}
          createGenres={createGenresForTrendMovie}
          route="movies/"
        />
      )}
      {!isActiveBtn && (
        <MovieGallery
          title="Popular films of the Day"
          dataMovies={moviesTrendDay}
          isLoading={isLoadingTrendDay}
          error={errorTrendDay}
          setPage={setPageDay}
          createGenres={createGenresForTrendMovie}
          route="movies/"
        />
      )}

      {topPosition < 0 && <BtnGoTo />}
    </div>
  );
};

export default HomePage;
