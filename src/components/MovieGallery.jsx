import { Link, useLocation } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardSet,
  CardThumb,
  Item,
  Title,
} from './MovieGallery.styled';

const filmCover =
  'https://res.cloudinary.com/daqnavarl/image/upload/v1700086246/Other/filmCover_leslnj.jpg';

export const MovieGallery = ({ movieId, title }) => {
  console.log('movieId :>> ', movieId);
  const location = useLocation();

  return (
    <>
      <Title>{title}</Title>
      <CardSet>
        <Item>
          <Link to={`movies/id`} state={{ from: location }}>
            <Card>
              <CardThumb>
                <img src={filmCover} alt={'textAlt'} />
              </CardThumb>

              <CardContent>
                <h2>Greyhound</h2>
                <p>Drama, Action | 2020</p>
              </CardContent>
            </Card>
          </Link>
        </Item>
      </CardSet>
    </>
  );
};
