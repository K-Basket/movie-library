import { MovieGallery } from 'components/MovieGallery';
import { createGenresForTrendMovie } from 'helpers/helpers';
import { useMoviesContext } from 'redux/Context';
import {
  // useGetMovieByIdQuery,
  useGetTrendDayQuery,
  useGetTrendWeekQuery,
} from 'redux/moviesSlice';

const HomePage = () => {
  const { data: dataTrendWeek } = useGetTrendWeekQuery('1');
  const { data: dataTrendDay } = useGetTrendDayQuery('1');
  // const { data: dataMovieById } = useGetMovieByIdQuery('872585');
  // console.log('dataMovieById :>> ', dataMovieById);

  const { isActiveBtn } = useMoviesContext();

  return (
    <>
      {isActiveBtn && (
        <MovieGallery
          title="Popular films of the Week"
          dataMovies={dataTrendWeek && dataTrendWeek.results}
          createGenres={createGenresForTrendMovie}
        />
      )}
      {!isActiveBtn && (
        <MovieGallery
          title="Popular films of the Day"
          dataMovies={dataTrendDay && dataTrendDay.results}
          createGenres={createGenresForTrendMovie}
        />
      )}
    </>
  );
};

export default HomePage;
