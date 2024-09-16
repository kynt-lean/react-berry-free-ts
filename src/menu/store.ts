import { injectSlice } from '@/store/reducer';
import { createSlice, PayloadAction, WithSlice } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer';
import { MenuItem, MenuItems } from './models';
import { menuItemExists, modifyMenuItemInTree } from './utils';

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
  items: []
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
    },
    setMenuItems: (state, action: PayloadAction<MenuItems>) => {
      state.items = action.payload as WritableDraft<MenuItem>[];
    },
    addMenuItem: (state, action: PayloadAction<MenuItem>) => {
      const exists = menuItemExists(state.items, action.payload.id);
      if (!exists) {
        state.items.push(action.payload as WritableDraft<MenuItem>);
      } else {
        throw new Error(`Menu item with id '${action.payload.id}' already exists.`);
      }
    },
    modifyMenuItem: (state, action: PayloadAction<MenuItem>) => {
      const exists = menuItemExists(state.items, action.payload.id);
      if (!exists) {
        throw new Error(`Menu item with id '${action.payload.id}' is not exist.`);
      }
      modifyMenuItemInTree(state.items, action.payload);
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
