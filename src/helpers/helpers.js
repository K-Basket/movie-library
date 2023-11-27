export const createGenresForTrendMovie = (genresList, genresMovie) => {
  if (!genresList) return;

  const result = genresList.genres
    .filter(({ id }) => genresMovie.includes(id))
    .map(({ name }) => name);

  if (!result.length) return 'No genres';
  if (result.length > 2) return `${result.slice(0, 2).join(', ')} ...`;

  return result.join(', ');
};

export const addCommaDelimiter = num =>
  num.replace(/[^0-9.]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
