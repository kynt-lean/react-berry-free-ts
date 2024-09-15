import { useSelector } from 'react-redux';
import { injectedMenuSlice } from './store';

const { selectMenuItems, selectMenuIsOpen, selectMenuDefaultId, selectMenuOpened } = injectedMenuSlice.selectors;

export const useMenuItems = () => useSelector(selectMenuItems);

export const useMenuIsOpen = () => useSelector(selectMenuIsOpen);

export const useMenuDefaultId = () => useSelector(selectMenuDefaultId);

export const useMenuOpened = () => useSelector(selectMenuOpened);
