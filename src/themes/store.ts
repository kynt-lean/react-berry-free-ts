import { injectSlice } from '@/store/reducer';
import { createSlice, PayloadAction, WithSlice } from '@reduxjs/toolkit';
import { Property } from 'csstype';
import { BerryThemeCustomization } from './model';

const initialState: BerryThemeCustomization = {
  fontFamily: `'Poppins', sans-serif`,
  borderRadius: 12,
  gridSpacing: 3,
  drawerWidth: 260
};

const customizationSlice = createSlice({
  name: 'customization',
  initialState: initialState,
  reducers: {
    setFontFamily: (state, action: PayloadAction<string>) => {
      return { ...state, fontFamily: action.payload };
    },
    setBorderRadius: (state, action: PayloadAction<Property.BorderRadius<string | number>>) => {
      return { ...state, borderRadius: action.payload };
    }
  },
  selectors: {
    selectCustomization: state => state,
    selectGridSpacing: state => state.gridSpacing,
    selectDrawerWidth: state => state.drawerWidth
  }
});

declare module '@/store/reducer' {
  export interface LazyLoadedSlices extends WithSlice<typeof customizationSlice> {}
}

export const injectedCustomizationSlice = injectSlice(customizationSlice);
