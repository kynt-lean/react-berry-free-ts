import { QueryClient, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthLayout } from '../components/layouts/auth-layout';
import { MainLayout } from '../components/layouts/main-layout';

export const createAppRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/dashboard',
          children: [
            {
              path: 'default',
              lazy: async () => {
                const { Dashboard } = await import('./pages/dashboard');
                return { Component: Dashboard };
              }
            }
          ]
        },
        {
          path: '/utils',
          children: [
            {
              path: 'typography',
              lazy: async () => {
                const { UtilsTypography } = await import('./pages/utilities/typography');
                return { Component: UtilsTypography };
              }
            },
            {
              path: 'color',
              lazy: async () => {
                const { UtilsColor } = await import('./pages/utilities/color');
                return { Component: UtilsColor };
              }
            },
            {
              path: 'shadow',
              lazy: async () => {
                const { UtilsShadow } = await import('./pages/utilities/shadow');
                return { Component: UtilsShadow };
              }
            }
          ]
        },
        {
          path: '/sample',
          children: [
            {
              path: 'card',
              lazy: async () => {
                const { SampleCard } = await import('./pages/sample/sample-card');
                return { Component: SampleCard };
              }
            }
          ]
        }
      ]
    },
    {
      path: '/auth',
      element: <AuthLayout />,
      children: [
        {
          path: 'register',
          lazy: async () => {
            const { Register } = await import('./pages/auth/register');
            return { Component: Register };
          }
        },
        {
          path: 'login',
          lazy: async () => {
            const { Login } = await import('./pages/auth/login');
            return { Component: Login };
          }
        }
      ]
    }
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();
  const router = useMemo(() => createAppRouter(queryClient), [queryClient]);
  return <RouterProvider router={router} />;
};
