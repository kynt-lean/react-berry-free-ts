import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { StyledEngineProvider } from '@mui/system';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { MainErrorFallback } from '../components/errors/main';
import { NavigationScroll } from '../components/layouts/navigation-scroll';
import { Notifications } from '../components/ui/notifications';
import { Spinner } from '../components/ui/spinner';
import { queryConfig } from '../lib/react-query';
import { RootState } from '../store/reducer';
import themes from '../themes';
import { BerryThemeCustomization } from '../themes/theme';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const customization = useSelector<RootState, BerryThemeCustomization>((state) => state.customization);
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig
      })
  );

  return (
    <React.Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          <Spinner size="xl" />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={MainErrorFallback}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <Notifications />
            <StyledEngineProvider injectFirst>
              <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                <NavigationScroll>{children}</NavigationScroll>
              </ThemeProvider>
            </StyledEngineProvider>

            {/* <AuthLoader
              renderLoading={() => (
                <div className="flex h-screen w-screen items-center justify-center">
                  <Spinner size="xl" />
                </div>
              )}
            >
              {children}
            </AuthLoader> */}
          </QueryClientProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
