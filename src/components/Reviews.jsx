import { useParams } from 'react-router-dom';
import { useGetUserReviewsMovieQuery } from 'redux/moviesSlice';
import { Text, TitleAuthorRewiews, TitleWrapp } from './Reviews.styled';
import { ReadMore } from './ReadMore';

export const Reviews = () => {
  const { id: movieId } = useParams();
  const { data, isLoading, error } = useGetUserReviewsMovieQuery(movieId);

  if (isLoading && !error)
    return <h1 style={{ fontSize: '30px', color: 'salmon' }}>...loading...</h1>;

  if (!data) return;

  const { results: rewiews } = data;

  return (
    <ul style={{ margin: '10px 0' }}>
      {rewiews.map(({ id, author, content, created_at }) => {
        const createdDate = created_at.slice(0, 10);
        const contentRewiews = content;

        return (
          <li key={id} style={{ marginBottom: '20px' }}>
            {
              <>
                <TitleWrapp>
                  <TitleAuthorRewiews>{author}</TitleAuthorRewiews>
                  <Text> {`(${createdDate})`}</Text>
                </TitleWrapp>

                <ReadMore>{contentRewiews}</ReadMore>
              </>
            }
          </li>
        );
      })}
    </ul>
  );
};
