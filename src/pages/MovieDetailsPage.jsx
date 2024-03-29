import { useEffect, useState } from 'react';
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
  Tagline,
  Title,
  TitleWrapp,
} from './MovieDetailsPage.styled';
import { addCommaDelimiter } from 'helpers/helpers';
import { VisuallyHidden } from 'utils/common.styled';
import { useResize } from 'hooks/useResize';
import { size } from 'utils/variables.styled';

import { removeLocalStorage, saveLocalStorage } from 'helpers/storage';
import { useMoviesContext } from 'redux/Context';
import { Loader } from 'components/Loader';

import { Reviews } from 'components/Reviews';
import { Trailer } from 'components/Trailer';
import { Cast } from 'components/Cast';
import { CastList } from 'components/CastList';

const MovieDetailsPage = () => {
  const location = useLocation();
  const { id: movieId } = useParams();
  const currentScreenWidth = useResize();
  const { data, isLoading, error } = useGetMovieByIdQuery(movieId);

  const [deviceTablet, setDeviceTablet] = useState(false);
  const { idMovFavorites, setIdMovFavorites, idMovQueue, setIdMovQueue } =
    useMoviesContext();

  useEffect(() => {
    if (
      currentScreenWidth >= Number.parseInt(size.tablet) &&
      currentScreenWidth < Number.parseInt(size.desktop)
    )
      return setDeviceTablet(true);

    setDeviceTablet(false);
  }, [currentScreenWidth]);

  if (isLoading && !error) return <Loader />;

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
  } = data;

  const year = release_date.split('-');
  const genresMovie = genres.map(({ name }) => name);
  const country = production_countries.map(({ name }) => name);

  const isProdCompanies = production_companies.some(
    ({ logo_path }) => logo_path
  );

  const changeLocalStorage = (keyLocal, valueId, state, setState) => {
    if (!state.includes(valueId)) {
      setState(prev => [...prev, valueId]);
      saveLocalStorage(keyLocal, [...state, valueId]);
      return;
    }

    if (state.includes(valueId)) {
      const res = [...state];
      res.splice(state.indexOf(valueId), 1);
      setState(res);
      saveLocalStorage(keyLocal, res);
    }

    if (state.length === 1) removeLocalStorage(keyLocal);
  };

  return (
    <>
      <div style={{ display: 'flex', gap: '15px', padding: '20px 0' }}>
        <button
          type="button"
          onClick={() =>
            changeLocalStorage(
              'favorites',
              movieId,
              idMovFavorites,
              setIdMovFavorites
            )
          }
        >
          {idMovFavorites.includes(movieId)
            ? 'remove from Favorites'
            : 'add to Favorites'}
        </button>

        <button
          type="button"
          onClick={() =>
            changeLocalStorage('queue', movieId, idMovQueue, setIdMovQueue)
          }
        >
          {idMovQueue.includes(movieId) ? 'remove from Queue' : 'add to Queue'}
        </button>
      </div>

      <TitleWrapp>
        <Title>Movie {title}</Title>
        <BtnGoToBack to={location.state?.from ?? '/'}>Go to back</BtnGoToBack>
      </TitleWrapp>
      <Section>
        <VisuallyHidden>Film description</VisuallyHidden>

        <AboutFilm>
          <ImageMovie>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
            />
          </ImageMovie>

          <DescriptionMovie>
            <Tagline>{tagline}</Tagline>

            <Item>
              <Name>Year:</Name>
              <Descript>{year[0]}</Descript>
            </Item>

            <Item>
              <Name>Original title:</Name>
              <Descript>{original_title}</Descript>
            </Item>

            <Item>
              <Name>Genres:</Name>
              <Descript>{genresMovie.join(', ')}</Descript>
            </Item>

            <Item>
              <Name>Country:</Name>
              <Descript>{country.join(', ')}</Descript>
            </Item>

            {!deviceTablet && (
              <Item>
                <Name>Cast:</Name>
                <Descript>
                  <CastList movieId={movieId} num={10} />
                </Descript>
              </Item>
            )}

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

            {!deviceTablet && (
              <Item>
                <Name>About:</Name>
                <Descript>{overview}</Descript>
              </Item>
            )}

            {!deviceTablet && (
              <Item>
                <Name>Home page:</Name>
                <Descript>
                  {
                    <Link
                      to={homepage}
                      target="_blank"
                      rel="noopener nofollow noreferrer"
                    >
                      Go to the {title} movie page
                    </Link>
                  }
                </Descript>
              </Item>
            )}
          </DescriptionMovie>
        </AboutFilm>

        {deviceTablet && (
          <div
            style={{
              marginTop: '40px',
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
            }}
          >
            <Item>
              <Name style={{ minWidth: '20%' }}>About:</Name>
              <Descript>{overview}</Descript>
            </Item>

            <Item>
              <Name style={{ minWidth: '20%' }}>Cast:</Name>
              <Descript>
                <CastList movieId={movieId} num={10} />
              </Descript>
            </Item>

            <Item>
              <Name style={{ minWidth: '20%' }}>Home page:</Name>
              <Descript>
                {
                  <Link
                    to={homepage}
                    target="_blank"
                    rel="noopener nofollow noreferrer"
                  >
                    Go to the {title} movie page
                  </Link>
                }
              </Descript>
            </Item>
          </div>
        )}
      </Section>
      {isProdCompanies && (
        <Section>
          <VisuallyHidden>Product companies</VisuallyHidden>

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
      )}

      <Section>
        <VisuallyHidden>Movie trailer</VisuallyHidden>
        <Trailer />
      </Section>

      <Section>
        <VisuallyHidden>Cast of the film</VisuallyHidden>
        <Cast />
      </Section>

      <Section>
        <VisuallyHidden>Reviews for a movie:</VisuallyHidden>
        <Reviews />
      </Section>
    </>
  );
};

export default MovieDetailsPage;
