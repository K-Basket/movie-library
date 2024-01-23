import { createContext, useContext, useEffect, useState } from 'react';
import {
  fetchByIdsMovies,
  useGetMoviesSearchQuery,
  useGetTrendDayQuery,
  useGetTrendWeekQuery,
} from './moviesSlice';
import { loadLocalStorage } from 'helpers/storage';
import { INITIAL_STATE_MOVIE_SEARCH } from 'utils/common';

const MoviesContext = createContext();
export const useMoviesContext = () => useContext(MoviesContext);

export const Context = ({ children }) => {
  const [isActiveBtn, setIsActiveBtn] = useState(true);
  const [isActiveBtnLoadMore, setIsActiveBtnLoadMore] = useState(true);
  const [isSearchResults, setIsSearchResults] = useState(false);

  const [pageWeek, setPageWeek] = useState(1);
  const [pageDay, setPageDay] = useState(1);
  const [pageSearch, setPageSearch] = useState(1);

  const [moviesTrendWeek, setMoviesTrendWeek] = useState([]);
  const [moviesTrendDay, setMoviesTrendDay] = useState([]);
  const [moviesSearch, setMoviesSearch] = useState(INITIAL_STATE_MOVIE_SEARCH);

  const [idMovFavorites, setIdMovFavorites] = useState([]);
  const [idMovQueue, setIdMovQueue] = useState([]);
  const [moviesFavorites, setMoviesFavorites] = useState([]);
  const [moviesQueue, setMoviesQueue] = useState([]);

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

  const { data, isLoading, error, originalArgs } = useGetMoviesSearchQuery({
    search: moviesSearch?.query,
    page: pageSearch,
  });

  // ===============================================================================================

  useEffect(() => {
    const localFavorites = loadLocalStorage('favorites');
    const localQueue = loadLocalStorage('queue');

    if (localFavorites) setIdMovFavorites(loadLocalStorage('favorites'));
    if (localQueue) setIdMovQueue(loadLocalStorage('queue'));
  }, []);

  useEffect(() => {
    fetchByIdsMovies(idMovFavorites, setMoviesFavorites);
  }, [idMovFavorites]);

  useEffect(() => {
    fetchByIdsMovies(idMovQueue, setMoviesQueue);
  }, [idMovQueue]);

  // ===============================================================================================

  useEffect(() => {
    if (dataTrendWeek)
      setMoviesTrendWeek(prev => [...prev, ...dataTrendWeek.results]);
  }, [dataTrendWeek]);

  useEffect(() => {
    if (dataTrendDay)
      setMoviesTrendDay(prev => [...prev, ...dataTrendDay.results]);
  }, [dataTrendDay]);

  useEffect(() => {
    if (isLoading || error) return;

    setMoviesSearch(prev => ({
      ...prev,
      ...{ data: [...prev.data, ...data.results] },
      ...{ total: data.total_results },
    }));
  }, [data, isLoading, error]);

  // перевірка для виводу повідомлення під пошуковим вікном
  useEffect(() => {
    setIsSearchResults(
      !data?.total_results && originalArgs?.search ? true : false
    );
  }, [data, originalArgs]);

  useEffect(() => {
    const { data, total } = moviesSearch;

    if (data.length >= total && data.length)
      return setIsActiveBtnLoadMore(false);
    setIsActiveBtnLoadMore(true);
  }, [moviesSearch]);

  return (
    <MoviesContext.Provider
      value={{
        isActiveBtn,
        setIsActiveBtn,

        isActiveBtnLoadMore,
        setIsActiveBtnLoadMore,

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

        isSearchResults,

        idMovFavorites,
        setIdMovFavorites,

        idMovQueue,
        setIdMovQueue,

        moviesFavorites,
        setMoviesFavorites,

        moviesQueue,
        setMoviesQueue,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
