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
  const { setMoviesSearch, setPageSearch } = useMoviesContext();

  const handleGhange = evt => {
    const { name, value } = evt.target;
    setValueForm({ ...valueForm, [name]: value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    setPageSearch(1);
    setMoviesSearch({ data: [], query });
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
