import { Link, useLocation, useParams } from 'react-router-dom';
import { useGetMovieByIdQuery } from 'redux/moviesSlice';
import {
  AboutFilm,
  BtnGoToBack,
  Company,
  Descript,
  DescriptionMovie,
  ImageMovie,
  Item,
  Name,
  ProductCompanies,
  Section,
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
    <>
      <p style={{ textAlign: 'end' }}>Movie Details pages</p>

      <Section>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <h2>Movie {title}</h2>
          <BtnGoToBack to={location.state?.from ?? '/'}>Go to back</BtnGoToBack>
        </div>

        <AboutFilm>
          <ImageMovie>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
            />
          </ImageMovie>

          <DescriptionMovie>
            <Item>
              <Name>TagNameine:</Name>
              <Descript>{tagline}</Descript>
            </Item>

            <Item>
              <Name>Year:</Name>
              <Descript>{year[0]}</Descript>
            </Item>

            <Item>
              <Name>Genres:</Name>
              <Descript>{genresMovie.join(', ')}</Descript>
            </Item>

            <Item>
              <Name>Country:</Name>
              <Descript>{country.join(', ')}</Descript>
            </Item>

            <Item>
              <Name>Budget:</Name>
              <Descript>{addCommaDelimiter(`${budget}`)}$</Descript>
            </Item>

            <Item>
              <Name>Vote / Votes:</Name>
              <Descript>{`${vote_average} / ${vote_count}`}</Descript>
            </Item>

            <Item>
              <Name>Popularity:</Name>
              <Descript>{popularity}</Descript>
            </Item>

            <Item>
              <Name>About:</Name>
              <Descript>{overview}</Descript>
            </Item>

            <Item>
              <Name>Original title:</Name>
              <Descript>{original_title}</Descript>
            </Item>

            <Item>
              <Name>Home page:</Name>
              <Descript>
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
              </Descript>
            </Item>

            <p style={{ fontSize: '25px' }}>{tagline}</p>

            {/* <ProductCompanies>
            {production_companies.map(
              ({ id, logo_path }) =>
                logo_path && (
                  <Company key={id}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${logo_path}`}
                      alt={logo_path}
                      width="150"
                    />
                  </Company>
                )
            )}
          </ProductCompanies> */}
          </DescriptionMovie>
        </AboutFilm>
      </Section>

      <Section>
        <h2>Product Companies</h2>

        <ProductCompanies>
          {production_companies.map(
            ({ id, logo_path }) =>
              logo_path && (
                <Company key={id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${logo_path}`}
                    alt={logo_path}
                    width="150"
                  />
                </Company>
              )
          )}
        </ProductCompanies>
      </Section>

      <Section>
        <h2>Cast</h2>

        <Cast />
      </Section>

      <Section>
        <h2>Reviews for a movie:</h2>

        <Reviews />
      </Section>
    </>
  );
};

export default MovieDetailsPage;
