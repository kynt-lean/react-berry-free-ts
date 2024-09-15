import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { StyledEngineProvider } from '@mui/system';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { MainErrorFallback } from '../components/errors/main';
import { NavigationScroll } from '../components/layouts/navigation-scroll';
import { Loader } from '../components/ui/loader';
import { queryConfig } from '../lib/react-query';
import { useCustomization } from '../themes/store';
import { createBerryTheme } from '../themes/theme';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const customization = useCustomization();
  const [queryClient] = React.useState(() => new QueryClient({ defaultOptions: queryConfig }));
  return (
    <React.Suspense fallback={<Loader />}>
      <ErrorBoundary FallbackComponent={MainErrorFallback}>
        <QueryClientProvider client={queryClient}>
          <HelmetProvider>
            <StyledEngineProvider injectFirst>
              <ThemeProvider theme={createBerryTheme(customization)}>
                <CssBaseline />
                <NavigationScroll>{children}</NavigationScroll>
              </ThemeProvider>
            </StyledEngineProvider>
          </HelmetProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
