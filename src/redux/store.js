import { configureStore } from '@reduxjs/toolkit';
import { moviesSlice } from './moviesSlice';

export const store = configureStore({
  reducer: {
    [moviesSlice.reducerPath]: moviesSlice.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    moviesSlice.middleware,
  ],
});
