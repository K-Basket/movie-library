// import { Link, useLocation } from 'react-router-dom';

import { MovieGallery } from 'components/MovieGallery';

const MoviesPage = () => {
  // const location = useLocation();
  // const { resultMov } = useMoviesContext();

  return (
    <>
      <h1>Movies pages</h1>
      <p>The page is under development.</p>

      <MovieGallery
        title={[`My Favorite`, `movies`]}
        // dataMovies={resultMov}
        // isLoading={isLoadingTrendDay}
        // error={errorTrendDay}
        // setPage={setPageDay}
        route="movies/"
      />

      {/* <h2>Component MovieGallery</h2>
      <p>render library Watched & Queue</p> */}

      {/* <Link to={`${`872585`}`} state={{ from: location }}>
        <h3 style={{ color: 'green' }}>Movie Card (id)</h3>
      </Link> */}
    </>
  );
};

export default MoviesPage;
