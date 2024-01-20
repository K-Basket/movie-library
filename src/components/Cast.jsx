import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useGetCastMovieQuery } from 'redux/moviesSlice';
import {
  Card,
  CardCast,
  CardContent,
  CardImg,
  Item,
  TitleCharacter,
  TitleName,
  TitlePopularity,
} from './Cast.styled';
import { size } from 'utils/variables.styled';
import { useResize } from 'hooks/useResize';
import { BtnSeeMore } from './BtnSeeMore';

const imgPlaceholder = '/dykOcAqI01Fci5cKQW3bEUrPWwU.jpg';

export const Cast = () => {
  const { id: movieId } = useParams();
  const location = useLocation();
  const { data, isLoading, error } = useGetCastMovieQuery(movieId);
  const [dataCasts, setDataCasts] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [numberCardCast, setNumberCardCast] = useState(5);

  const currentScreenWidth = useResize();

  useEffect(() => {
    if (currentScreenWidth <= Number.parseInt(size.tablet))
      setNumberCardCast(2);
    if (
      currentScreenWidth >= Number.parseInt(size.tablet) &&
      currentScreenWidth < Number.parseInt(size.desktop)
    )
      setNumberCardCast(4);
    if (currentScreenWidth >= Number.parseInt(size.desktop))
      setNumberCardCast(6);

    if (data) {
      const { cast } = data;

      if (isActive) return setDataCasts(cast);

      const res = [];

      for (let i = 0; i < numberCardCast; i += 1) {
        if (cast[i]) res.push(cast[i]);
      }
      setDataCasts(res);
    }
  }, [data, isActive, numberCardCast, currentScreenWidth]);

  const makeActive = () => {
    setIsActive(!isActive);
  };

  if (isLoading && !error)
    return <h1 style={{ fontSize: '30px', color: 'salmon' }}>...loading...</h1>;

  return (
    <>
      <CardCast>
        {dataCasts.map(({ id, character, name, popularity, profile_path }) => {
          const poster = `https://image.tmdb.org/t/p/w500${
            profile_path ?? imgPlaceholder
          }`;

          return (
            <Item key={id}>
              <Link to={`/actor?id=${id}`} state={{ from: location }}>
                <Card>
                  <CardImg>
                    <img src={poster} alt={character} />
                  </CardImg>

                  <CardContent>
                    <TitleName>{name}</TitleName>
                    <TitleCharacter>{character}</TitleCharacter>
                    <TitlePopularity>Popularity: {popularity}</TitlePopularity>
                  </CardContent>
                </Card>
              </Link>
            </Item>
          );
        })}
      </CardCast>

      {dataCasts.length !== 0 && (
        <BtnSeeMore click={makeActive}>
          {isActive ? 'see less actors' : 'see more actors'}
        </BtnSeeMore>
      )}
    </>
  );
};
