import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { lazy } from 'react';
import MoviesDetails from 'pages/MoviesDetails';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
// const Watched = lazy(() => import('pages/Watched'));
// const Queue = lazy(() => import('pages/Queue'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MoviesDetails />} />
        {/* <Route path="watched" element={<Watched />} />
        <Route path="Queue" element={<Queue />} /> */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
