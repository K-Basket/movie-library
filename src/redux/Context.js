import { createContext, useContext, useState } from 'react';

const MoviesContext = createContext();

export const useMoviesContext = () => useContext(MoviesContext);

export const Context = ({ children }) => {
  const [isActiveBtn, setIsActiveBtn] = useState(true);

  return (
    <MoviesContext.Provider value={{ isActiveBtn, setIsActiveBtn }}>
      {children}
    </MoviesContext.Provider>
  );
};
