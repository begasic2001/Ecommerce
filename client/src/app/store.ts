import { configureStore } from '@reduxjs/toolkit';
import searchReducers from '~/layouts/header/reduxSlice';

const reducer = {
  search: searchReducers,
};

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
