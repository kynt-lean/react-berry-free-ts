import { injectSlice } from '@/store/reducer';
import { createSlice, PayloadAction, WithSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { authItems } from './auth';
import { dashboardItems } from './dashboard';
import { MenuItems } from './models';
import { otherItems } from './other';
import { utilitiesItems } from './utilities';

const menuItems: MenuItems = [dashboardItems, authItems, utilitiesItems, otherItems];

interface MenuState {
  opened?: boolean;
  isOpen?: string[];
  defaultId?: string;
  id?: string;
  type?: string;
  items: MenuItems;
}

const initialState: MenuState = {
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
    selectMenuOpened: state => Boolean(state.opened)
  }
});

declare module '@/store/reducer' {
  export interface LazyLoadedSlices extends WithSlice<typeof menuSlice> {}
}

const injectedMenuSlice = injectSlice(menuSlice);

export const { openMenuId, setMenuOpened } = menuSlice.actions;

const { selectMenuItems, selectMenuIsOpen, selectMenuDefaultId, selectMenuOpened } = injectedMenuSlice.selectors;

export const useMenuItems = () => useSelector(selectMenuItems);

export const useMenuIsOpen = () => useSelector(selectMenuIsOpen);

export const useMenuDefaultId = () => useSelector(selectMenuDefaultId);

export const useMenuOpened = () => useSelector(selectMenuOpened);
