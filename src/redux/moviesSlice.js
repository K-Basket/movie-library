import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = 'api_key=c05652c397b2dd01065e8cba4a8a45ab';

export const moviesSlice = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
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
    getGenresList: builder.query({
      query: () => `/genre/movie/list?${API_KEY}&language=en`,
      providesTags: ['movie'],
    }),
  }),
});

export const {
  useGetTrendWeekQuery,
  useGetTrendDayQuery,
  useGetMovieByIdQuery,
  useGetGenresListQuery,
} = moviesSlice;
