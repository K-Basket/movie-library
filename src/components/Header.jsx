import sprite from 'images/sprite.svg';
import {
  HeaderWrap,
  IconButton,
  Input,
  LinkLogo,
  Nav,
  NavLinkStyled,
  SearchResult,
  WrappLinkLogo,
} from './Header.styled';

export const Header = () => {
  const handleMovieSearch = evt => {
    evt.preventDefault();
    console.log('Button Movie Search');
  };

  return (
    <HeaderWrap>
      <Nav>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/movies">My Library</NavLinkStyled>

        <form>
          <Input
            type="text"
            name="searchQuery"
            autoComplete="off"
            autoFocus
            placeholder="Movie search"
          />

          <IconButton type="submit" onClick={handleMovieSearch}>
            <svg width="16px" height="16px">
              <use href={`${sprite}#icon-search`}></use>
            </svg>
          </IconButton>
        </form>
      </Nav>

      {/* Якщо не знайдено - true, в прротилежному - false */}
      {true && (
        <SearchResult>
          Search result not successful. Enter <br /> the correct movie name.
        </SearchResult>
      )}

      <WrappLinkLogo>
        <LinkLogo to="/">
          <svg>
            <use href={`${sprite}#icon-film`}></use>
          </svg>
          <p>Movie Library</p>
        </LinkLogo>
      </WrappLinkLogo>
    </HeaderWrap>
  );
};
