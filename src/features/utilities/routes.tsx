import { RouteObject } from 'react-router-dom';

export const utilitiesRoutes: RouteObject[] = [
  {
    path: 'typography',
    lazy: async () => {
      const { UtilsTypography } = await import('./pages/typography');
      return { Component: UtilsTypography };
    }
  },
  {
    path: 'color',
    lazy: async () => {
      const { UtilsColor } = await import('./pages/color');
      return { Component: UtilsColor };
    }
  },
  {
    path: 'shadow',
    lazy: async () => {
      const { UtilsShadow } = await import('./pages/shadow');
      return { Component: UtilsShadow };
    }
  }
];
