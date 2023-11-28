import { BtnGoToBack } from 'pages/MovieDetailsPage.styled';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useGetPersonByIdQuery } from 'redux/moviesSlice';

export const Actor = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const idSearch = searchParams.get('id');

  const { data, isLoading, error } = useGetPersonByIdQuery(idSearch);

  if (isLoading && !error)
    return <h1 style={{ fontSize: '30px', color: 'salmon' }}>...loading...</h1>;

  if (!data) return;
  const {
    name,
    biography,
    birthday,
    profile_path,
    popularity,
    place_of_birth,
    homepage,
  } = data;

  return (
    <>
      <BtnGoToBack to={location.state?.from ?? '/home'}>Go to back</BtnGoToBack>
      <h2>{name}</h2>
      <p>Popularity: {popularity}</p>
      <p>Homepage: {homepage ? homepage : 'homepage is missing'}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${profile_path}`}
        alt={name}
        width="120"
      />
      <p>Birthday: {birthday}</p>
      <p>Place_of_birth: {place_of_birth}</p>
      <p>Biography: {biography}</p>
      <p>{idSearch}</p>
    </>
  );
};
