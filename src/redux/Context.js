import { createContext, useContext, useEffect, useState } from 'react';
import { useGetTrendDayQuery, useGetTrendWeekQuery } from './moviesSlice';

const MoviesContext = createContext();
export const useMoviesContext = () => useContext(MoviesContext);

export const Context = ({ children }) => {
  const [isActiveBtn, setIsActiveBtn] = useState(true);
  const [pageWeek, setPageWeek] = useState(1);
  const [pageDay, setPageDay] = useState(1);

  const { data: dataTrendWeek } = useGetTrendWeekQuery(pageWeek);
  const { data: dataTrendDay } = useGetTrendDayQuery(pageDay);

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

  console.log('pageWeek :>> ', pageWeek);
  console.log('pageDay :>> ', pageDay);

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
        setMoviesTrendWeek,
        moviesTrendDay,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
