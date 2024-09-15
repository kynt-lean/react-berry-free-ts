import { useSelector } from 'react-redux';
import { injectedCustomizationSlice } from './store';

const { selectCustomization, selectGridSpacing, selectDrawerWidth, selectAppDrawerWidth } = injectedCustomizationSlice.selectors;

export const useCustomization = () => useSelector(selectCustomization);

export const useGridSpacing = () => useSelector(selectGridSpacing);

export const useDrawerWidth = () => useSelector(selectDrawerWidth);

export const useAppDrawerWidth = () => useSelector(selectAppDrawerWidth);
