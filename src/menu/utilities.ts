import { IconPalette, IconShadow, IconTypography } from '@tabler/icons-react';
import { MenuItem } from './models';

export const utilitiesItems: MenuItem = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'Typography',
      type: 'item',
      url: '/utils/typography',
      icon: IconTypography,
      breadcrumbs: false
    },
    {
      id: 'util-color',
      title: 'Color',
      type: 'item',
      url: '/utils/color',
      icon: IconPalette,
      breadcrumbs: false
    },
    {
      id: 'util-shadow',
      title: 'Shadow',
      type: 'item',
      url: '/utils/shadow',
      icon: IconShadow,
      breadcrumbs: false
    }
  ]
};
