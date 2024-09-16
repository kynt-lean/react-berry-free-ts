import { createSlice, PayloadAction, WithSlice } from '@reduxjs/toolkit';
import { AppConfiguration } from './models';

const config: AppConfiguration = {
  defaultPath: '/dashboard/default'
};

export const configSlice = createSlice({
  name: 'config',
  initialState: config,
  reducers: {
    setDefaultPath: (state, action: PayloadAction<string>) => {
      state.defaultPath = action.payload;
    }
  },
  selectors: {
    selectDefaultPath: state => state.defaultPath
  }
});

declare module '@/store/reducer' {
  export interface LazyLoadedSlices extends WithSlice<typeof configSlice> {}
}
