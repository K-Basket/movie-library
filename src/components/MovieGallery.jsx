import { Link, useLocation } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardSet,
  CardThumb,
  Item,
  Title,
} from './MovieGallery.styled';
import { useGetGenresListQuery } from 'redux/moviesSlice';

const imgPlaceholder = '/dykOcAqI01Fci5cKQW3bEUrPWwU.jpg';

export const MovieGallery = ({ dataMovies, title, createGenres }) => {
  const location = useLocation();
  const { data: genresList } = useGetGenresListQuery();

  return (
    <>
      <Title>{title}</Title>
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
                <Item key={id}>
                  <Link to={`movies/id`} state={{ from: location }}>
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
    </>
  );
};
