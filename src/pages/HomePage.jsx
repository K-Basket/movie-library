import { MovieGallery } from 'components/MovieGallery';
import { useMoviesContext } from 'redux/Context';
import { BtnGoTo } from 'components/BtnGoTo';
import { useEffect, useRef, useState } from 'react';

const HomePage = () => {
  const {
    moviesTrendWeek,
    moviesTrendDay,
    setPageWeek,
    isLoadingTrendWeek,
    errorTrendWeek,
    setPageDay,
    isLoadingTrendDay,
    errorTrendDay,
    moviesSearch,
    isLoadingSearch,
    errorSearch,
    setPageSearch,
    activeMovGallery,
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
      {activeMovGallery === 'week' && (
        <MovieGallery
          title={[`Popular films of the`, `Week`]}
          dataMovies={moviesTrendWeek}
          isLoading={isLoadingTrendWeek}
          error={errorTrendWeek}
          setPage={setPageWeek}
          route="movies/"
        />
      )}

      {activeMovGallery === 'day' && (
        <MovieGallery
          title={[`Popular films of the`, `Day`]}
          dataMovies={moviesTrendDay}
          isLoading={isLoadingTrendDay}
          error={errorTrendDay}
          setPage={setPageDay}
          route="movies/"
        />
      )}

      {activeMovGallery === 'search' && (
        <MovieGallery
          title={[`Results found for the query:`, `"${moviesSearch.query}"`]}
          dataMovies={moviesSearch}
          isLoading={isLoadingSearch}
          error={errorSearch}
          setPage={setPageSearch}
          route="movies/"
        />
      )}

      {topPosition < 0 && <BtnGoTo />}
    </div>
  );
};

export default HomePage;
