import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import sprite from 'images/sprite.svg';
import {
  Header,
  HeaderWrap,
  IconButton,
  Input,
  Nav,
  NavLinkStyled,
} from './Layout.styled';
import { Container } from 'utils/container.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Container>
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

                <IconButton>
                  <svg width="16px" height="16px">
                    <use href={`${sprite}#icon-search`}></use>
                  </svg>
                </IconButton>
              </form>
            </Nav>
          </HeaderWrap>
        </Container>
      </Header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>

      <footer>
        <h2>Footer</h2>
      </footer>
    </>
  );
};
