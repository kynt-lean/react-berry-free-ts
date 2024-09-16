import { createStore } from '@/store';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider as StoreProvider } from 'react-redux';
import { MainErrorFallback } from '../components/errors/main';
import { configSlice } from '../config/store';
import { AppMenuProvider } from './menu-provider';
import { AppProvider } from './provider';
import { AppRouter } from './router';

export const App = () => {
  return (
    <ErrorBoundary FallbackComponent={MainErrorFallback}>
      <StoreProvider store={createStore(configSlice)}>
        <AppMenuProvider />
        <AppProvider>
          <AppRouter />
        </AppProvider>
      </StoreProvider>
    </ErrorBoundary>
  );
};
