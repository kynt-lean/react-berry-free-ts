import { createSlice, WithSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { AppConfiguration } from './models';

const config: AppConfiguration = {
  defaultPath: '/dashboard/default'
};

export const configSlice = createSlice({
  name: 'config',
  initialState: config,
  reducers: {},
  selectors: {
    selectDefaultPath: state => state.defaultPath
  }
});

declare module '@/store/reducer' {
  export interface LazyLoadedSlices extends WithSlice<typeof configSlice> {}
}

const { selectDefaultPath } = configSlice.selectors;

export const useDefaultPath = () => useSelector(selectDefaultPath);
