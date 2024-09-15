import { useDispatch } from 'react-redux';
import { injectedMenuSlice } from './store';

const { openMenuId, setMenuOpened } = injectedMenuSlice.actions;

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
