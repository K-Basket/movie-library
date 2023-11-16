import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = 'api_key=c05652c397b2dd01065e8cba4a8a45ab';

export const moviesSlice = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
  }),
  tagTypes: ['mowie'],
  endpoints: builder => ({
    getTrendWeek: builder.query({
      query: () => `/trending/movie/week?${API_KEY}&language=en-US'`,
      providesTags: ['mowie'],
    }),
    getTrendDay: builder.query({
      query: () => `/trending/movie/day?${API_KEY}&language=en-US'`,
      providesTags: ['mowie'],
    }),
  }),
});

export const { useGetTrendWeekQuery, useGetTrendDayQuery } = moviesSlice;
