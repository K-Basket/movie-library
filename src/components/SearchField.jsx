import { useState } from 'react';
import { IconButton, Input } from './SearchField.styled';
import sprite from 'images/sprite.svg';
import { useMoviesContext } from 'redux/Context';

export const SearchField = () => {
  const INITIAL_STATE = {
    query: '',
  };

  const [valueForm, setValueForm] = useState(INITIAL_STATE);
  const { query } = valueForm;
  const { moviesSearch, setMoviesSearch, setPageSearch } = useMoviesContext();

  const handleGhange = evt => {
    const { name, value } = evt.target;
    setValueForm({ ...valueForm, [name]: value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (!query) return;

    setPageSearch(1);

    if (moviesSearch.query !== query)
      setMoviesSearch(prev => ({
        ...prev,
        ...{ isHidden: false, data: [], query },
      }));

    setValueForm(INITIAL_STATE);
  };

  return (
    <form>
      <Input
        type="text"
        name="query"
        autoComplete="off"
        value={query}
        onChange={handleGhange}
        // autoFocus
        placeholder="Movie search"
      />

      <IconButton type="submit" onClick={handleSubmit}>
        <svg width="16px" height="16px">
          <use href={`${sprite}#icon-search`}></use>
        </svg>
      </IconButton>
    </form>
  );
};
