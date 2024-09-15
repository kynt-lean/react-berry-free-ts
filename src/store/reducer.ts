import { combineSlices, Slice, SliceCaseReducers, SliceSelectors } from '@reduxjs/toolkit';
import { Reducer } from 'redux';

export interface LazyLoadedSlices {}

export const rootReducer = combineSlices().withLazyLoadedSlices<LazyLoadedSlices>();

export const injectSlice = <
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends string,
  Selectors extends SliceSelectors<State>,
  ReducerPath extends string = Name
>(
  slice: Slice<State, CaseReducers, Name, ReducerPath, Selectors>
) => slice.injectInto(rootReducer);

type SliceLike<ReducerPath extends string, State> = {
  reducerPath: ReducerPath;
  reducer: Reducer<State>;
};

export type AnySliceLike = SliceLike<string, any>;
