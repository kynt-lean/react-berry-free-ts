import { IconBrandChrome, IconHelp } from '@tabler/icons-react';
import { MenuItem } from '../../menu/models';

export const sampleMenu: MenuItem = {
  id: 'sample',
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
      id: 'sample-documentation',
      title: 'Documentation',
      type: 'item',
      url: 'https://codedthemes.gitbook.io/berry/',
      icon: IconHelp,
      external: true,
      target: true
    }
  ]
};
