import { MovieGallery } from 'components/MovieGallery';
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
    moviesSearch,
    setPageSearch,
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

  // ============================================================================================

  // console.log('moviesTrendWeek :>> ', moviesTrendWeek);
  // console.log('moviesTrendDay :>> ', moviesTrendDay);
  // console.log('moviesSearch :>> ', moviesSearch);
  // ============================================================================================

  if (!moviesSearch.isHidden)
    return (
      <div ref={refGallery}>
        <MovieGallery
          title={[`Search result for:`, `"${moviesSearch.query}"`]}
          dataMovies={moviesSearch}
          setPage={setPageSearch}
          route="movies/"
        />

        {topPosition < 0 && <BtnGoTo />}
      </div>
    );

  return (
    <div ref={refGallery}>
      {isActiveBtn && (
        <MovieGallery
          title={[`Popular films of the`, `Week`]}
          dataMovies={moviesTrendWeek}
          isLoading={isLoadingTrendWeek}
          error={errorTrendWeek}
          setPage={setPageWeek}
          route="movies/"
        />
      )}
      {!isActiveBtn && (
        <MovieGallery
          title={[`Popular films of the`, `Day`]}
          dataMovies={moviesTrendDay}
          isLoading={isLoadingTrendDay}
          error={errorTrendDay}
          setPage={setPageDay}
          route="movies/"
        />
      )}

      {topPosition < 0 && <BtnGoTo />}
    </div>
  );
};

export default HomePage;
