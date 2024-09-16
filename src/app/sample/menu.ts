import { IconBrandChrome, IconHelp } from '@tabler/icons-react';
import { MenuItem } from '../../menu/models';
import { samplePathPrefix } from './constants';

export const sampleMenu: MenuItem = {
  id: 'sample',
  order: 4,
  type: 'group',
  children: [
    {
      id: 'sample-card',
      title: 'Sample Page',
      order: 1,
      type: 'item',
      url: `${samplePathPrefix}/card`,
      icon: IconBrandChrome,
      breadcrumbs: false
    },
    {
      id: 'sample-documentation',
      title: 'Documentation',
      order: 2,
      type: 'item',
      url: 'https://codedthemes.gitbook.io/berry/',
      icon: IconHelp,
      external: true,
      target: true
    }
  ]
};
