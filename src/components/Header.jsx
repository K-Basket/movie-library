import sprite from 'images/sprite.svg';
import {
  Button,
  HeaderWrap,
  IconButton,
  Input,
  LinkLogo,
  Nav,
  NavLinkStyled,
  SearchResult,
  WrappBtn,
  WrappLinkLogo,
} from './Header.styled';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export const Header = () => {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState(true);

  const handleMovieSearch = evt => {
    evt.preventDefault();
    console.log('Button Movie Search');
  };

  const onMakeActiveBtn = evt => {
    const content = evt.target.textContent;
    setIsActive(content === 'Watched' ? true : false);
  };

  return (
    <HeaderWrap>
      <Nav>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/movies">My Library</NavLinkStyled>

        {pathname === '/' && (
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
        )}
      </Nav>

      {/* Якщо не знайдено - true, в протилежному - false */}
      {true && (
        <SearchResult>
          Search result not successful. Enter <br /> the correct movie name.
        </SearchResult>
      )}

      {pathname === '/movies' && (
        <WrappBtn>
          <Button $active={isActive} onClick={onMakeActiveBtn}>
            Watched
          </Button>
          <Button $active={!isActive} onClick={onMakeActiveBtn}>
            Queue
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
    </HeaderWrap>
  );
};
