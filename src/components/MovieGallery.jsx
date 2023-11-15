import {
  Card,
  CardContent,
  CardSet,
  CardThumb,
  Item,
} from './MovieGallery.styled';
import imgTest from '../images/imgTest.jpg';
import { Link, useLocation } from 'react-router-dom';

export const MovieGallery = ({ movieId }) => {
  console.log('movieId :>> ', movieId);
  const location = useLocation();

  return (
    <>
      <h2>Movie Gallery component</h2>

      <CardSet>
        <Item>
          <Link to={`movies/id`} state={{ from: location }}>
            <Card>
              <CardThumb>
                <img src={imgTest} alt={'imgTestAlt'} />
              </CardThumb>

              <CardContent>
                <h3>Movie content</h3>
                <p>Movie description</p>
              </CardContent>
            </Card>
          </Link>
        </Item>
      </CardSet>
    </>
  );
};
