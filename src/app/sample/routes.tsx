import { RouteObject } from 'react-router-dom';

export const sampleRoutes: RouteObject[] = [
  {
    path: 'card',
    lazy: async () => {
      const { SampleCard } = await import('./pages/sample-card');
      return { Component: SampleCard };
    }
  }
];
