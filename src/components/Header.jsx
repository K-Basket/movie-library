import sprite from 'images/sprite.svg';
import {
  HeaderWrap,
  IconButton,
  Input,
  LinkLogo,
  Nav,
  NavLinkStyled,
  SearchResult,
} from './Header.styled';

export const Header = () => {
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

          <IconButton
            type="button"
            onClick={() => {
              console.log('Hi');
            }}
          >
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

      <LinkLogo to="/">
        <svg>
          <use href={`${sprite}#icon-film`}></use>
        </svg>
        <p>Movie Library</p>
      </LinkLogo>
    </HeaderWrap>
  );
};
