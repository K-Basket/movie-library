import { MovieGallery } from 'components/MovieGallery';
import { useGetTrendDayQuery, useGetTrendWeekQuery } from 'redux/moviesSlice';

const HomePage = () => {
  const {
    data: dataWeek,
    error: errorWeek,
    isLoading: isLoadingWeek,
  } = useGetTrendWeekQuery();
  console.log('dataWeek :>> ', dataWeek);
  console.log('errorWeek :>> ', errorWeek);
  console.log('isLoadingWeek :>> ', isLoadingWeek);

  const {
    data: dataDay,
    errorWeek: errorDay,
    isLoadingWeek: isLoadingDay,
  } = useGetTrendDayQuery();
  console.log('dataDay :>> ', dataDay);
  console.log('errorDay :>> ', errorDay);
  console.log('isLoadingDay :>> ', isLoadingDay);

  return (
    <>
      <MovieGallery movieId={'12345'} title="Popular film of the week" />
    </>
  );
};

export default HomePage;
