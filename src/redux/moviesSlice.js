import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = 'api_key=c05652c397b2dd01065e8cba4a8a45ab';
const BASE_URL = 'https://api.themoviedb.org/3';

export const moviesSlice = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['movie'],
  endpoints: builder => ({
    getTrendWeek: builder.query({
      query: page =>
        `/trending/movie/week?${API_KEY}&language=en-US&page=${page}`,
      providesTags: ['movie'],
    }),
    getTrendDay: builder.query({
      query: page =>
        `/trending/movie/day?${API_KEY}&language=en-US&page=${page}`,
      providesTags: ['movie'],
    }),
    getMovieById: builder.query({
      query: id => `/movie/${id}?${API_KEY}&language=en-US`,
      providesTags: ['movie'],
    }),
    getUserReviewsMovie: builder.query({
      query: id => `/movie/${id}/reviews?${API_KEY}&language=en-US`,
      providesTags: ['movie'],
    }),
    getCastMovie: builder.query({
      query: id => `/movie/${id}/credits?${API_KEY}&language=en-US`,
      providesTags: ['movie'],
    }),
    getImagesMovie: builder.query({
      query: id => `/movie/${id}/images?${API_KEY}`,
      providesTags: ['movie'],
    }),
    getPersonById: builder.query({
      query: id => `/person/${id}?${API_KEY}&language=en-US`,
      providesTags: ['movie'],
    }),
    getTrailerById: builder.query({
      query: id => `/movie/${id}/videos?${API_KEY}`,
      providesTags: ['movie'],
    }),
    getGenresList: builder.query({
      query: () => `/genre/movie/list?${API_KEY}&language=en`,
      providesTags: ['movie'],
    }),
    getMoviesSearch: builder.query({
      query: ({ search, page }) =>
        `/search/movie?query=${search}&include_adult=false&language=en-US&page=${page}&${API_KEY}`,
      providesTags: ['movie'],
    }),
  }),
});

export const fetchByIdsMovies = (idsMovies, setState, initialState) => {
  setState(initialState);

  idsMovies.forEach(idMovie => {
    fetch(`${BASE_URL}/movie/${idMovie}?${API_KEY}&language=en-US`)
      .then(response => response.json())
      .then(response => {
        const genre_ids = response.genres.map(({ id }) => id);

        setState(prev => ({
          ...prev,
          data: [...prev.data, { ...response, genre_ids }],
          total: prev.data.length + 1,
        }));
      })
      .catch(err => console.error(err));
  });
};

export const {
  useGetTrendWeekQuery,
  useGetTrendDayQuery,
  useGetMovieByIdQuery,
  useGetUserReviewsMovieQuery,
  useGetImagesMovieQuery,
  useGetCastMovieQuery,
  useGetPersonByIdQuery,
  useGetTrailerByIdQuery,
  useGetGenresListQuery,
  useGetMoviesSearchQuery,
} = moviesSlice;
