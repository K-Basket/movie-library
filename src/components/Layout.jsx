import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import sprite from 'images/sprite.svg';
import {
  Footer,
  Header,
  HeaderWrap,
  IconButton,
  Input,
  Main,
  Nav,
  NavLinkStyled,
  Wrapper,
} from './Layout.styled';
import { Container } from 'utils/container.styled';

export const Layout = () => {
  return (
    <Wrapper>
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

      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Container>
            <Outlet />
          </Container>
        </Suspense>
      </Main>

      <Footer>
        <Container>
          <p>
            &#169; 2023 | All Rights Reserved | Developed by Kostiantyn Koshyk
          </p>
        </Container>
      </Footer>
    </Wrapper>
  );
};
