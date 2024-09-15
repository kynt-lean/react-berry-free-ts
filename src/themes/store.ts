import { injectSlice } from '@/store/reducer';
import { createSlice, PayloadAction, WithSlice } from '@reduxjs/toolkit';
import { BerryThemeCustomization } from './model';

const initialState: BerryThemeCustomization = {
  fontFamily: `'Poppins', sans-serif`,
  borderRadius: 12,
  gridSpacing: 3,
  drawerWidth: 260,
  appDrawerWidth: 320
};

const customizationSlice = createSlice({
  name: 'customization',
  initialState: initialState,
  reducers: {
    setFontFamily: (state, action: PayloadAction<string>) => {
      state.fontFamily = action.payload;
    },
    setBorderRadius: (state, action: PayloadAction<number>) => {
      state.borderRadius = action.payload;
    }
  },
  selectors: {
    selectCustomization: state => state,
    selectGridSpacing: state => state.gridSpacing,
    selectDrawerWidth: state => state.drawerWidth,
    selectAppDrawerWidth: state => state.appDrawerWidth
  }
});

declare module '@/store/reducer' {
  export interface LazyLoadedSlices extends WithSlice<typeof customizationSlice> {}
}

export const injectedCustomizationSlice = injectSlice(customizationSlice);
