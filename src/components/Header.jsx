import { useLocation } from 'react-router-dom';
import { useMoviesContext } from 'redux/Context';

import sprite from 'images/sprite.svg';
import {
  Button,
  HeaderWrap,
  LinkLogo,
  Nav,
  NavLinkStyled,
  SearchResult,
  WrappBtn,
  WrappLinkLogo,
  WrappLogoBtn,
} from './Header.styled';
import { SearchField } from './SearchField';
import { INITIAL_STATE_MOVIE_SEARCH } from 'utils/common';

export const Header = () => {
  const { pathname } = useLocation();
  const {
    isSearchResults,
    setMoviesSearch,
    activeMovGallery,
    setActiveMovGallery,
  } = useMoviesContext();

  const changeActiveMovGallery = value => {
    setMoviesSearch(INITIAL_STATE_MOVIE_SEARCH);
    setActiveMovGallery(value);
  };

  return (
    <HeaderWrap>
      <Nav>
        <NavLinkStyled to="/" onClick={() => setActiveMovGallery('week')}>
          Home
        </NavLinkStyled>
        <NavLinkStyled to="/movies">My Library</NavLinkStyled>

        {pathname === '/' && <SearchField />}
      </Nav>

      {isSearchResults && (
        <SearchResult>
          Search result not successful. Enter <br /> the correct movie name.
        </SearchResult>
      )}

      <WrappLogoBtn>
        {pathname === '/movies' && (
          <WrappBtn>
            <Button
              $active={activeMovGallery === 'favorite'}
              onClick={() => {
                changeActiveMovGallery('favorite');
              }}
            >
              Favorites
            </Button>
            <Button
              $active={activeMovGallery === 'queue'}
              onClick={() => {
                changeActiveMovGallery('queue');
              }}
            >
              Queue
            </Button>
          </WrappBtn>
        )}

        {pathname === '/' && (
          <WrappBtn>
            <Button
              $active={activeMovGallery === 'week'}
              onClick={() => {
                changeActiveMovGallery('week');
              }}
            >
              Films of the week
            </Button>
            <Button
              $active={activeMovGallery === 'day'}
              onClick={() => {
                changeActiveMovGallery('day');
              }}
            >
              Films of the day
            </Button>
          </WrappBtn>
        )}

        <WrappLinkLogo>
          <LinkLogo to="/" onClick={() => setActiveMovGallery('week')}>
            <svg>
              <use href={`${sprite}#icon-film`}></use>
            </svg>
            <p>Movie Library</p>
          </LinkLogo>
        </WrappLinkLogo>
      </WrappLogoBtn>
    </HeaderWrap>
  );
};
