import { createContext, useContext, useState } from 'react';

const MoviesContext = createContext();

export const useMoviesContext = () => useContext(MoviesContext);

export const Context = ({ children }) => {
  const [isActiveBtn, setIsActiveBtn] = useState(true);
  const [pageNum, setPageNum] = useState(1);

  return (
    <MoviesContext.Provider
      value={{ isActiveBtn, setIsActiveBtn, pageNum, setPageNum }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
