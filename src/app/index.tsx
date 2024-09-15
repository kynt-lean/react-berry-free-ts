import { createStore } from '@/store';
import { Provider as StoreProvider } from 'react-redux';
import { configSlice } from '../config/store';
import { AppProvider } from './provider';
import { AppRouter } from './router';

export const App = () => {
  return (
    <StoreProvider store={createStore(configSlice)}>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </StoreProvider>
  );
};
