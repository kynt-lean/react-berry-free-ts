import { RouteObject } from 'react-router-dom';

export const dashboardRoutes: RouteObject[] = [
  {
    path: 'default',
    lazy: async () => {
      const { Dashboard } = await import('./pages/default');
      return { Component: Dashboard };
    }
  }
];
