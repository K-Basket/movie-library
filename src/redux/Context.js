import { createContext, useContext } from 'react';

const MoviesContext = createContext();

export const useMoviesContext = () => useContext(MoviesContext);

export const Context = ({ children }) => {
  return <MoviesContext.Provider value={{}}>{children}</MoviesContext.Provider>;
};
