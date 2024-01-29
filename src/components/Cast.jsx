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
import { getLimitedData } from 'helpers/getLimitedData';

const imgPlaceholder = '/dykOcAqI01Fci5cKQW3bEUrPWwU.jpg';

export const Cast = () => {
  const { id: movieId } = useParams();
  const location = useLocation();
  const { data, isLoading, error } = useGetCastMovieQuery(movieId);
  const currentScreenWidth = useResize();

  const [showMore, setShowMore] = useState(false);
  const [dataCasts, setDataCasts] = useState([]);
  const [isActiveBtn, setIsActiveBtn] = useState(false);
  const [numberOfCardCast, setNumberOfCardCast] = useState();

  useEffect(() => {
    if (currentScreenWidth <= Number.parseInt(size.tablet))
      setNumberOfCardCast(2);
    if (
      currentScreenWidth >= Number.parseInt(size.tablet) &&
      currentScreenWidth < Number.parseInt(size.desktop)
    )
      setNumberOfCardCast(4);
    if (currentScreenWidth >= Number.parseInt(size.desktop))
      setNumberOfCardCast(6);

    if (data) {
      const { cast } = data;

      if (cast.length > numberOfCardCast) setIsActiveBtn(true);
      if (showMore) return setDataCasts(cast);

      getLimitedData(cast, numberOfCardCast, setDataCasts);
    }
  }, [data, showMore, numberOfCardCast, currentScreenWidth]);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  // if (isLoading && !error) return <Loader />;
  if (isLoading && !error) return;

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

      {isActiveBtn && (
        <BtnSeeMore click={toggleShowMore}>
          {showMore ? 'see less actors' : 'see more actors'}
        </BtnSeeMore>
      )}
    </>
  );
};
