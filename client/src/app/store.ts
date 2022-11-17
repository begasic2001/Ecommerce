import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';

const reducer = {
  product: productReducer,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
