import { RouteObject } from 'react-router-dom';

export const authRoutes: RouteObject[] = [
  {
    path: 'register',
    lazy: async () => {
      const { Register } = await import('./pages/register');
      return { Component: Register };
    }
  },
  {
    path: 'login',
    lazy: async () => {
      const { Login } = await import('./pages/login');
      return { Component: Login };
    }
  }
];
