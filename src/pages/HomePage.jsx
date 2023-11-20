import { MovieGallery } from 'components/MovieGallery';
import { createGenresForTrendMovie } from 'helpers/helpers';
import { useMoviesContext } from 'redux/Context';
import {
  // useGetMovieByIdQuery,
  useGetTrendDayQuery,
  useGetTrendWeekQuery,
} from 'redux/moviesSlice';

const HomePage = () => {
  // const [addPage, setAddPage] = useState(1);
  const { isActiveBtn, pageNum } = useMoviesContext();
  const { data: dataTrendWeek } = useGetTrendWeekQuery(pageNum);
  const { data: dataTrendDay } = useGetTrendDayQuery(pageNum);
  // const { data: dataMovieById } = useGetMovieByIdQuery('872585');
  // console.log('dataMovieById :>> ', dataMovieById);

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
