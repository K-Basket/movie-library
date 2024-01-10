import { createContext, useContext, useEffect, useState } from 'react';
import {
  useGetMoviesSearchQuery,
  useGetTrendDayQuery,
  useGetTrendWeekQuery,
} from './moviesSlice';

const MoviesContext = createContext();
export const useMoviesContext = () => useContext(MoviesContext);

export const Context = ({ children }) => {
  const [isActiveBtn, setIsActiveBtn] = useState(true);
  const [pageWeek, setPageWeek] = useState(1);
  const [pageDay, setPageDay] = useState(1);
  const [pageSearch, setPageSearch] = useState(1);

  const [moviesTrendWeek, setMoviesTrendWeek] = useState([]);
  const [moviesTrendDay, setMoviesTrendDay] = useState([]);
  const [moviesSearch, setMoviesSearch] = useState({ data: [], query: '' });

  const {
    data: dataTrendWeek,
    isLoading: isLoadingTrendWeek,
    error: errorTrendWeek,
  } = useGetTrendWeekQuery(pageWeek);
  const {
    data: dataTrendDay,
    isLoading: isLoadingTrendDay,
    error: errorTrendDay,
  } = useGetTrendDayQuery(pageDay);

  const { data, isLoading, error } = useGetMoviesSearchQuery({
    // search: moviesSearch?.query ?? [],
    search: moviesSearch.query,
    page: pageSearch,
  });

  useEffect(() => {
    if (isLoading || error) return;

    setMoviesSearch(prev => ({
      ...prev,
      ...{ data: [...prev.data, ...data.results] },
    }));
  }, [data, isLoading, error]);

  // // =================================================================
  // useEffect(() => {
  //   console.log('moviesSearch :>> ', moviesSearch);
  // }, [moviesSearch]);
  // // =================================================================

  useEffect(() => {
    if (dataTrendWeek)
      setMoviesTrendWeek(prev => [...prev, ...dataTrendWeek.results]);
  }, [dataTrendWeek]);

  useEffect(() => {
    if (dataTrendDay)
      setMoviesTrendDay(prev => [...prev, ...dataTrendDay.results]);
  }, [dataTrendDay]);

  return (
    <MoviesContext.Provider
      value={{
        isActiveBtn,
        setIsActiveBtn,

        pageWeek,
        setPageWeek,

        pageDay,
        setPageDay,

        pageSearch,
        setPageSearch,

        moviesTrendWeek,
        isLoadingTrendWeek,
        errorTrendWeek,

        moviesTrendDay,
        isLoadingTrendDay,
        errorTrendDay,

        moviesSearch,
        setMoviesSearch,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
