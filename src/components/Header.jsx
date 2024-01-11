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

export const Header = () => {
  const { pathname } = useLocation();
  const { isActiveBtn, setIsActiveBtn, isSearchResults } = useMoviesContext();

  const onMakeActiveBtn = evt => {
    const content = evt.target.textContent;

    setIsActiveBtn(() => {
      if (content === 'Watched') return true;
      if (content === 'Films of the week') return true;

      return false;
    });
  };

  return (
    <HeaderWrap>
      <Nav>
        <NavLinkStyled to="/">Home</NavLinkStyled>
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
            <Button $active={isActiveBtn} onClick={onMakeActiveBtn}>
              Watched
            </Button>
            <Button $active={!isActiveBtn} onClick={onMakeActiveBtn}>
              Queue
            </Button>
          </WrappBtn>
        )}

        {pathname === '/' && (
          <WrappBtn>
            <Button $active={isActiveBtn} onClick={onMakeActiveBtn}>
              Films of the week
            </Button>
            <Button $active={!isActiveBtn} onClick={onMakeActiveBtn}>
              Films of the day
            </Button>
          </WrappBtn>
        )}

        <WrappLinkLogo>
          <LinkLogo to="/">
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
