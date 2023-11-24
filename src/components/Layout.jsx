import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from './Footer';
import { Header } from './Header';
import { Container } from 'utils/container.styled';
import { Wrapper } from './Layout.styled';

export const Layout = () => {
  return (
    <Wrapper>
      <header>
        <Container>
          <Header />
        </Container>
      </header>

      <main>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Container>
            <Outlet />
          </Container>
        </Suspense>
      </main>

      <footer>
        <Container>
          <Footer />
        </Container>
      </footer>
    </Wrapper>
  );
};
