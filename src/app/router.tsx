import { QueryClient, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { authRoutes } from '../features/auth/routes';
import { dashboardRoutes } from '../features/dashboard/routes';
import { utilitiesRoutes } from '../features/utilities/routes';
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
          path: '/dashboard',
          children: dashboardRoutes
        },
        {
          path: '/utils',
          children: utilitiesRoutes
        },
        {
          path: '/sample',
          children: sampleRoutes
        }
      ]
    },
    {
      path: '/auth',
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
