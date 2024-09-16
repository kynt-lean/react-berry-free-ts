import { useSelector } from 'react-redux';
import { configSlice } from './store';

const { selectDefaultPath } = configSlice.selectors;

export const useDefaultPath = () => useSelector(selectDefaultPath);
