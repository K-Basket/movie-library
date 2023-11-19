import { createContext, useContext, useEffect, useState } from 'react';
import { useGetGenresListQuery } from './moviesSlice';

const MoviesContext = createContext();

export const useMoviesContext = () => useContext(MoviesContext);

export const Context = ({ children }) => {
  return <MoviesContext.Provider value={{}}>{children}</MoviesContext.Provider>;
};
