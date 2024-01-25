import { createContext, useContext, useEffect, useState } from 'react';
import {
  fetchByIdsMovies,
  useGetMoviesSearchQuery,
  useGetTrendDayQuery,
  useGetTrendWeekQuery,
} from './moviesSlice';
import { loadLocalStorage } from 'helpers/storage';
import { INITIAL_STATE_MOVIE_SEARCH, INITIAL_STATE_MOVIES } from 'utils/common';
// import { useLocation } from 'react-router-dom';

const MoviesContext = createContext();
export const useMoviesContext = () => useContext(MoviesContext);

export const Context = ({ children }) => {
  // const { pathname } = useLocation();

  const [isSearchResults, setIsSearchResults] = useState(false);
  const [activeMovGallery, setActiveMovGallery] = useState('week');

  const [pageWeek, setPageWeek] = useState(1);
  const [pageDay, setPageDay] = useState(1);
  const [pageSearch, setPageSearch] = useState(1);

  const [moviesTrendWeek, setMoviesTrendWeek] = useState(INITIAL_STATE_MOVIES);
  const [moviesTrendDay, setMoviesTrendDay] = useState(INITIAL_STATE_MOVIES);
  const [moviesSearch, setMoviesSearch] = useState(INITIAL_STATE_MOVIE_SEARCH);

  const [idMovFavorites, setIdMovFavorites] = useState([]);
  const [idMovQueue, setIdMovQueue] = useState([]);

  const [moviesFavorites, setMoviesFavorites] = useState();
  const [moviesQueue, setMoviesQueue] = useState();

  const [isActiveBtn, setIsActiveBtn] = useState(false);

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

  const {
    data: dataSearch,
    isLoading: isLoadingSearch,
    error: errorSearch,
    originalArgs,
  } = useGetMoviesSearchQuery({
    search: moviesSearch?.query,
    page: pageSearch,
  });

  useEffect(() => {
    const localFavorites = loadLocalStorage('favorites');
    const localQueue = loadLocalStorage('queue');

    if (localFavorites) setIdMovFavorites(loadLocalStorage('favorites'));
    if (localQueue) setIdMovQueue(loadLocalStorage('queue'));
  }, []);

  // useEffect(() => {
  //   if (pathname === '/') setActiveMovGallery('week');
  //   if (pathname === '/movies') setActiveMovGallery('favorite');
  //   console.log('pathname :>> ', pathname);
  // }, [pathname]);

  useEffect(() => {
    fetchByIdsMovies(idMovFavorites, setMoviesFavorites, INITIAL_STATE_MOVIES);
  }, [idMovFavorites]);

  useEffect(() => {
    fetchByIdsMovies(idMovQueue, setMoviesQueue, INITIAL_STATE_MOVIES);
  }, [idMovQueue]);

  useEffect(() => {
    createDataMovies(
      dataTrendWeek,
      isLoadingTrendWeek,
      errorTrendWeek,
      setMoviesTrendWeek
    );
  }, [dataTrendWeek, isLoadingTrendWeek, errorTrendWeek]);

  useEffect(() => {
    createDataMovies(
      dataTrendDay,
      isLoadingTrendDay,
      errorTrendDay,
      setMoviesTrendDay
    );
  }, [dataTrendDay, isLoadingTrendDay, errorTrendDay]);

  useEffect(() => {
    createDataMovies(dataSearch, isLoadingSearch, errorSearch, setMoviesSearch);
  }, [dataSearch, isLoadingSearch, errorSearch]);

  // перевірка для виводу повідомлення під пошуковим вікном
  useEffect(() => {
    setIsSearchResults(
      !dataSearch?.total_results && originalArgs?.search ? true : false
    );
  }, [dataSearch, originalArgs]);

  const createDataMovies = (data, isLoading, error, setState) => {
    if (isLoading || error) return;

    const { results, total_results } = data;

    setState(prev => ({
      ...prev,
      ...{ data: [...prev.data, ...results] },
      ...{ total: total_results },
    }));
  };

  return (
    <MoviesContext.Provider
      value={{
        activeMovGallery,
        setActiveMovGallery,

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
        isLoadingSearch,
        errorSearch,

        isSearchResults,

        idMovFavorites,
        setIdMovFavorites,

        idMovQueue,
        setIdMovQueue,

        moviesFavorites,
        setMoviesFavorites,

        moviesQueue,
        setMoviesQueue,

        isActiveBtn,
        setIsActiveBtn,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
