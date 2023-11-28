import { Link, useLocation, useParams } from 'react-router-dom';
import { useGetMovieByIdQuery } from 'redux/moviesSlice';
import { BtnGoToBack } from './MovieDetailsPage.styled';
import { addCommaDelimiter } from 'helpers/helpers';
import { Cast } from 'components/Cast';
import { Reviews } from 'components/Reviews';

const MovieDetailsPage = () => {
  const location = useLocation();
  const { id: movieId } = useParams();

  const {
    data: dataMovie,
    isLoading: isLoadingMovie,
    error: errorMovie,
  } = useGetMovieByIdQuery(movieId);

  if (isLoadingMovie && !errorMovie)
    return <h1 style={{ fontSize: '30px', color: 'salmon' }}>...loading...</h1>;

  if (!dataMovie) return;

  const {
    id,
    original_title,
    title,
    poster_path,
    backdrop_path,
    budget,
    genres,
    homepage,
    original_language,
    overview,
    popularity,
    production_companies,
    production_countries,
    release_date,
    tagline,
    vote_average,
    vote_count,
  } = dataMovie;

  return (
    <>
      <p>Movie Details pages</p>
      <BtnGoToBack to={location.state?.from ?? '/'}>Go to back</BtnGoToBack>

      {/* {window.history.state.idx === 0 ? (
        <BtnGoToBack to={location.state?.from ?? '/home'}>
          Go to back
        </BtnGoToBack>
      ) : (
        <BtnGoToBack onClick={() => window.history.back()}>
          Go to back
        </BtnGoToBack>
      )} */}

      <h1>original_title: {original_title}</h1>
      <p>backdrop_path:</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        alt={backdrop_path}
        width="800"
      />
      <p>budget {addCommaDelimiter(`${budget}`)}$</p>

      <ul>
        genres:
        {genres.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>

      <Link
        to={homepage}
        target="_blank"
        rel="noopener nofollow noreferrer"
        style={{ color: 'blue' }}
      >
        Link Homepage {title}
      </Link>

      <p>Id backend: {id}</p>

      <p>original_language: {original_language}</p>

      <p>original_title: {original_title}</p>

      <p>overview: {overview}</p>

      <p>popularity: {popularity}</p>

      <p>poster_path</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        width="300"
      />

      <ul>
        production_companies:
        {production_companies.map(
          ({ id, logo_path }) =>
            logo_path && (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${logo_path}`}
                  alt={logo_path}
                  width="100"
                />
              </li>
            )
        )}
      </ul>

      <ul>
        production_countries:
        {production_countries.map(({ iso_3166_1, name }) => (
          <li key={iso_3166_1}>{name}</li>
        ))}
      </ul>

      <p>release_date: {release_date}</p>

      <p>tagline: {tagline}</p>

      <h2>title: {title}</h2>

      <p>vote_average: {vote_average}</p>
      <p>vote_count: {vote_count}</p>

      <h2 style={{ color: 'green', paddingTop: '25px', fontSize: '20px' }}>
        User reviews for a movie:
      </h2>
      <Cast />

      <h2 style={{ color: 'green', paddingTop: '25px', fontSize: '20px' }}>
        Read about Cast
      </h2>
      <Reviews />
    </>
  );
};

export default MovieDetailsPage;
