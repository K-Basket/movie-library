import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLinkStyled } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/movies">My Library</NavLinkStyled>
          {/* <NavLinkStyled to="/movies">My movies</NavLinkStyled> */}

          {/* <NavLinkStyled to="/watched">Watched</NavLinkStyled>
          <NavLinkStyled to="/queue">Queue</NavLinkStyled> */}
        </nav>
      </header>

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
