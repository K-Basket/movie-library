import { Link, useLocation } from 'react-router-dom';
import {
  ButtonLoadMore,
  Card,
  CardContent,
  CardSet,
  CardThumb,
  Item,
  Title,
} from './MovieGallery.styled';
import { useGetGenresListQuery } from 'redux/moviesSlice';

import { useRef } from 'react';

const imgPlaceholder = '/dykOcAqI01Fci5cKQW3bEUrPWwU.jpg';

export const MovieGallery = ({
  dataMovies,
  isLoading,
  error,
  setPage,
  title,
  createGenres,
  route,
}) => {
  const location = useLocation();
  const { data: genresList } = useGetGenresListQuery();

  const titleArray = title.split(' ');
  const titleStart = titleArray;
  const titleEnd = titleStart.pop();

  const refItem = useRef();

  const addNewPage = () => {
    setPage(prev => prev + 1);

    setTimeout(() => {
      const { height: itemHeight } = refItem.current.getBoundingClientRect();

      window.scrollBy({
        top: itemHeight * 1.2,
        behavior: 'smooth',
      });
    }, 250);
  };

  if (isLoading && !error)
    return <h1 style={{ fontSize: '30px', color: 'salmon' }}>...loading...</h1>;

  return (
    <>
      <Title>
        {`${titleStart.join(' ')} `}
        <span>{titleEnd}</span>
      </Title>
      <CardSet>
        {dataMovies &&
          dataMovies.map(
            ({ id, poster_path, title, release_date, genre_ids }) => {
              const poster = `https://image.tmdb.org/t/p/w500${
                poster_path ?? imgPlaceholder
              }`;
              const [yearRelease] = release_date.split('-');
              const genre = createGenres(genresList, genre_ids);

              return (
                <Item key={id} ref={refItem}>
                  <Link to={`${route}${id}`} state={{ from: location }}>
                    {/* <Link to={`${route}${id}`}> */}
                    <Card>
                      <CardThumb>
                        <img src={poster} alt={title} />
                      </CardThumb>

                      <CardContent>
                        <h2>{title}</h2>
                        <p>{`${genre} | ${yearRelease}`}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </Item>
              );
            }
          )}
      </CardSet>

      <ButtonLoadMore $active={true} onClick={addNewPage}>
        load more
      </ButtonLoadMore>
    </>
  );
};
