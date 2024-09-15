import { injectSlice } from '@/store/reducer';
import { createSlice, PayloadAction, WithSlice } from '@reduxjs/toolkit';
import { authItems } from './auth';
import { dashboardItems } from './dashboard';
import { MenuItems } from './models';
import { otherItems } from './other';
import { utilitiesItems } from './utilities';

const menuItems: MenuItems = [dashboardItems, authItems, utilitiesItems, otherItems];

interface MenuState {
  opened: boolean;
  isOpen: string[];
  defaultId?: string;
  id?: string;
  type?: string;
  items: MenuItems;
}

const initialState: MenuState = {
  opened: true,
  isOpen: [],
  defaultId: 'default',
  items: menuItems
};

const menuSlice = createSlice({
  name: 'menu',
  initialState: initialState,
  reducers: {
    openMenuId: (state, action: PayloadAction<string>) => {
      state.isOpen = [action.payload];
    },
    setMenuOpened: (state, action: PayloadAction<boolean>) => {
      state.opened = action.payload;
    }
  },
  selectors: {
    selectMenuItems: state => state.items,
    selectMenuIsOpen: state => state.isOpen,
    selectMenuDefaultId: state => state.defaultId,
    selectMenuOpened: state => state.opened
  }
});

declare module '@/store/reducer' {
  export interface LazyLoadedSlices extends WithSlice<typeof menuSlice> {}
}

export const injectedMenuSlice = injectSlice(menuSlice);
