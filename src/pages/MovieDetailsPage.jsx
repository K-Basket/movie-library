import { Link, useLocation, useParams } from 'react-router-dom';
import { useGetMovieByIdQuery } from 'redux/moviesSlice';
import {
  AboutFilm,
  BtnGoToBack,
  DescriptionMovie,
  ImageMovie,
} from './MovieDetailsPage.styled';
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

  // const { data: dataImages } = useGetImagesMovieQuery(movieId);

  if (isLoadingMovie && !errorMovie)
    return <h1 style={{ fontSize: '30px', color: 'salmon' }}>...loading...</h1>;

  if (!dataMovie) return;

  const {
    original_title,
    title,
    poster_path,
    budget,
    genres,
    homepage,
    overview,
    popularity,
    production_companies,
    production_countries,
    release_date,
    tagline,
    vote_average,
    vote_count,
  } = dataMovie;

  const year = release_date.split('-');
  const genresMovie = genres.map(({ name }) => name);
  const country = production_countries.map(({ name }) => name);

  return (
    <section>
      <p style={{ textAlign: 'end' }}>Movie Details pages</p>

      <h2>Movie {title}</h2>
      <AboutFilm>
        <ImageMovie>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
        </ImageMovie>

        <DescriptionMovie>
          <ul>
            <li>Tagline:</li>
            <li>{tagline}</li>
          </ul>

          <ul>
            <li>Year:</li>
            <li>{year[0]}</li>
          </ul>

          <ul>
            <li>Genres:</li>
            <li>{genresMovie.join(', ')}</li>
          </ul>

          <ul>
            <li>Country:</li>
            <li>{country.join(', ')}</li>
          </ul>

          <ul>
            <li>Budget:</li>
            <li>{addCommaDelimiter(`${budget}`)}$</li>
          </ul>

          <ul>
            <li>Vote / Votes:</li>
            <li>{`${vote_average} / ${vote_count}`}</li>
          </ul>

          <ul>
            <li>Popularity:</li>
            <li>{popularity}</li>
          </ul>

          <ul>
            <li>About:</li>
            <li>{overview}</li>
          </ul>

          <ul>
            <li>Original title:</li>
            <li>{original_title}</li>
          </ul>

          <ul>
            <li>Home page:</li>
            <li>
              {
                <Link
                  to={homepage}
                  target="_blank"
                  rel="noopener nofollow noreferrer"
                  style={{ color: 'blue' }}
                >
                  Link Homepage {title}
                </Link>
              }
            </li>
          </ul>

          <p style={{ fontSize: '25px' }}>{tagline}</p>

          <ul>
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
        </DescriptionMovie>
      </AboutFilm>

      <BtnGoToBack to={location.state?.from ?? '/'}>Go to back</BtnGoToBack>

      <h2 style={{ color: 'green', paddingTop: '25px', fontSize: '20px' }}>
        Read about Cast
      </h2>
      <Cast />

      <h2 style={{ color: 'green', paddingTop: '25px', fontSize: '20px' }}>
        User reviews for a movie:
      </h2>
      <Reviews />
    </section>
  );
};

export default MovieDetailsPage;
