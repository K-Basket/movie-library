export const createGenresForTrendMovie = (genresList, genresMovie) => {
  const result = genresList?.genres
    .filter(({ id }) => genresMovie.includes(id))
    .map(({ name }) => name);

  if (!result.length) return 'No genres';
  if (result.length > 2) return `${result.slice(0, 2).join(', ')} ...`;

  return result.join(', ');
};
