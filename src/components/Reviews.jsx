import { useParams } from 'react-router-dom';
import { useGetUserReviewsMovieQuery } from 'redux/moviesSlice';

export const Reviews = () => {
  const { id: movieId } = useParams();
  const { data, isLoading, error } = useGetUserReviewsMovieQuery(movieId);

  if (isLoading && !error)
    return <h1 style={{ fontSize: '30px', color: 'salmon' }}>...loading...</h1>;

  if (!data) return;

  const { results: rewiews } = data;

  return (
    <ul
      style={{
        outline: '2px solid green',
      }}
    >
      {rewiews.map(({ id, author, content, created_at }) => (
        <li key={id}>
          {
            <>
              <h3>author rewiews: {author}</h3>
              <p>{content}</p>
              <p> {created_at}</p>
            </>
          }
        </li>
      ))}
    </ul>
  );
};
