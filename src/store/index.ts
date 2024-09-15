import { configureStore } from '@reduxjs/toolkit';
import { AnySliceLike, rootReducer } from './reducer';

export const createStore = <Slices extends AnySliceLike[]>(...slices: Slices) => {
  slices.map(slice => rootReducer.inject(slice));
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false
      })
  });
};
