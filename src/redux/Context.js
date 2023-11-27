import { createContext, useContext, useEffect, useState } from 'react';
import { useGetTrendDayQuery, useGetTrendWeekQuery } from './moviesSlice';

const MoviesContext = createContext();
export const useMoviesContext = () => useContext(MoviesContext);

export const Context = ({ children }) => {
  const [isActiveBtn, setIsActiveBtn] = useState(true);
  const [pageWeek, setPageWeek] = useState(1);
  const [pageDay, setPageDay] = useState(1);

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

  const [moviesTrendWeek, setMoviesTrendWeek] = useState([]);
  const [moviesTrendDay, setMoviesTrendDay] = useState([]);

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

        moviesTrendWeek,
        isLoadingTrendWeek,
        errorTrendWeek,

        // setMoviesTrendWeek,
        moviesTrendDay,
        isLoadingTrendDay,
        errorTrendDay,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
