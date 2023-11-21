import { MovieGallery } from 'components/MovieGallery';
import { createGenresForTrendMovie } from 'helpers/helpers';
import { useMoviesContext } from 'redux/Context';

const HomePage = () => {
  const {
    isActiveBtn,
    moviesTrendWeek,
    moviesTrendDay,
    pageWeek,
    setPageWeek,
    pageDay,
    setPageDay,
  } = useMoviesContext();

  return (
    <>
      {isActiveBtn && (
        <MovieGallery
          title="Popular films of the Week"
          dataMovies={moviesTrendWeek}
          page={pageWeek}
          setPage={setPageWeek}
          createGenres={createGenresForTrendMovie}
        />
      )}
      {!isActiveBtn && (
        <MovieGallery
          title="Popular films of the Day"
          dataMovies={moviesTrendDay}
          page={pageDay}
          setPage={setPageDay}
          createGenres={createGenresForTrendMovie}
        />
      )}
    </>
  );
};

export default HomePage;
