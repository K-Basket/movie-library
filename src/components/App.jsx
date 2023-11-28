import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { lazy } from 'react';
import MovieDetailsPage from 'pages/MovieDetailsPage';
import { Cast } from './Cast';
import { Reviews } from './Reviews';
import { Actor } from './Actor';

const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:id" element={<MovieDetailsPage />}>
          <Route path="reviews" element={<Reviews />} />
          <Route path="cast" element={<Cast />} />
        </Route>
        <Route path="actor" element={<Actor />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
