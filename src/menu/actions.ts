import { useDispatch } from 'react-redux';
import { MenuItem, MenuItems } from './models';
import { injectedMenuSlice } from './store';

const { openMenuId, setMenuOpened, setMenuItems, addMenuItem, modifyMenuItem } = injectedMenuSlice.actions;

export const useOpenMenuId = () => {
  const dispatch = useDispatch();
  const dispatchAction = (id: string) => dispatch(openMenuId(id));
  return { openMenuId: dispatchAction };
};

export const useSetMenuOpened = () => {
  const dispatch = useDispatch();
  const dispatchAction = (opened: boolean) => dispatch(setMenuOpened(opened));
  return { setMenuOpened: dispatchAction };
};

export const useSetMenuItems = () => {
  const dispatch = useDispatch();
  const dispatchAction = (items: MenuItems) => dispatch(setMenuItems(items));
  return { setMenuItems: dispatchAction };
};

export const useAddMenuItem = () => {
  const dispatch = useDispatch();
  const dispatchAction = (item: MenuItem) => dispatch(addMenuItem(item));
  return { addMenuItem: dispatchAction };
};

export const useModifyMenuItem = () => {
  const dispatch = useDispatch();
  const dispatchAction = (item: MenuItem) => dispatch(modifyMenuItem(item));
  return { modifyMenuItem: dispatchAction };
};
