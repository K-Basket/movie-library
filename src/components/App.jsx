import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { lazy } from 'react';
import MovieDetailsPage from 'pages/MovieDetailsPage';

const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:id" element={<MovieDetailsPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
