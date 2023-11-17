import { MovieGallery } from 'components/MovieGallery';
import { createGenresForTrendMovie } from 'helpers/helpers';
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

  return (
    <>
      <MovieGallery
        dataMovies={dataTrendWeek && dataTrendWeek.results}
        title="Popular film of the week"
        createGenres={createGenresForTrendMovie}
      />
      <MovieGallery
        dataMovies={dataTrendDay && dataTrendDay.results}
        title="Popular film of the Day"
        createGenres={createGenresForTrendMovie}
      />
    </>
  );
};

export default HomePage;
