import { QueryClient, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { authPathPrefix } from '../features/auth/constants';
import { authRoutes } from '../features/auth/routes';
import { dashboardPathPrefix } from '../features/dashboard/constants';
import { dashboardRoutes } from '../features/dashboard/routes';
import { utilitiesPathPrefix } from '../features/utilities/constants';
import { utilitiesRoutes } from '../features/utilities/routes';
import { samplePathPrefix } from './sample/constants';
import { sampleRoutes } from './sample/routes';

export const createAppRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: '/',
      lazy: async () => {
        const { MainLayout } = await import('../components/layouts/main-layout');
        return { Component: MainLayout };
      },
      children: [
        {
          path: dashboardPathPrefix,
          children: dashboardRoutes
        },
        {
          path: utilitiesPathPrefix,
          children: utilitiesRoutes
        },
        {
          path: samplePathPrefix,
          children: sampleRoutes
        }
      ]
    },
    {
      path: authPathPrefix,
      lazy: async () => {
        const { AuthLayout } = await import('../components/layouts/auth-layout');
        return { Component: AuthLayout };
      },
      children: authRoutes
    }
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();
  const router = useMemo(() => createAppRouter(queryClient), [queryClient]);
  return <RouterProvider router={router} />;
};
