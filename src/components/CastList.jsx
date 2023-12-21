import { useGetCastMovieQuery } from 'redux/moviesSlice';

export const CastList = ({ movieId, num }) => {
  const { data, isLoading, error } = useGetCastMovieQuery(movieId);

  if (isLoading && !error)
    return <h1 style={{ fontSize: '30px', color: 'salmon' }}>...loading...</h1>;

  if (!data) return;

  const { cast } = data;

  const res = [];

  for (let i = 0; i < num; i += 1) {
    if (cast[i]) res.push(cast[i]); // перевірка, якщо актерів меньше чим num
  }

  const list = res.map(({ name }) => name).join(', ');

  return <p>{list}...</p>;
};
