import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from './Footer';
import { Header } from './Header';
import { Container } from 'utils/container.styled';
import { Wrapper } from './Layout.styled';
import { Loader } from './Loader';

export const Layout = () => {
  return (
    <Wrapper>
      <header>
        <Container>
          <Header />
        </Container>
      </header>

      <main>
        <Suspense fallback={<Loader />}>
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
