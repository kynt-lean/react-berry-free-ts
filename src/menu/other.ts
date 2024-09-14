import { IconBrandChrome, IconHelp } from '@tabler/icons-react';
import { MenuItem } from './models';

export const otherItems: MenuItem = {
  id: 'sample-docs-roadmap',
  type: 'group',
  children: [
    {
      id: 'sample-card',
      title: 'Sample Page',
      type: 'item',
      url: '/sample/card',
      icon: IconBrandChrome,
      breadcrumbs: false
    },
    {
      id: 'documentation',
      title: 'Documentation',
      type: 'item',
      url: 'https://codedthemes.gitbook.io/berry/',
      icon: IconHelp,
      external: true,
      target: true
    }
  ]
};
