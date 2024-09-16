import { IconPalette, IconShadow, IconTypography } from '@tabler/icons-react';
import { MenuItem } from '../../menu/models';
import { utilitiesPathPrefix } from './constants';

export const utilitiesMenu: MenuItem = {
  id: 'utilities',
  title: 'Utilities',
  order: 3,
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'Typography',
      order: 1,
      type: 'item',
      url: `${utilitiesPathPrefix}/typography`,
      icon: IconTypography,
      breadcrumbs: false
    },
    {
      id: 'util-color',
      title: 'Color',
      order: 2,
      type: 'item',
      url: `${utilitiesPathPrefix}/color`,
      icon: IconPalette,
      breadcrumbs: false
    },
    {
      id: 'util-shadow',
      title: 'Shadow',
      order: 3,
      type: 'item',
      url: `${utilitiesPathPrefix}/shadow`,
      icon: IconShadow,
      breadcrumbs: false
    }
  ]
};
