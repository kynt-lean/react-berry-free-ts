import { useSelector } from 'react-redux';
import { injectedCustomizationSlice } from './store';

const { selectCustomization, selectGridSpacing, selectDrawerWidth } = injectedCustomizationSlice.selectors;

export const useCustomization = () => useSelector(selectCustomization);

export const useGridSpacing = () => useSelector(selectGridSpacing);

export const useDrawerWidth = () => useSelector(selectDrawerWidth);
