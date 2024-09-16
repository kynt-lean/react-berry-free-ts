import { useDispatch } from 'react-redux';
import { injectedCustomizationSlice } from './store';

const { setFontFamily, setBorderRadius } = injectedCustomizationSlice.actions;

export const useSetFontFamily = () => {
  const dispatch = useDispatch();
  const dispatchAction = (fontFamily: string) => dispatch(setFontFamily(fontFamily));
  return { setFontFamily: dispatchAction };
};

export const useSetBorderRadius = () => {
  const dispatch = useDispatch();
  const dispatchAction = (borderRadius: number) => dispatch(setBorderRadius(borderRadius));
  return { setBorderRadius: dispatchAction };
};
