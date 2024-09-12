// assets
import { IconPalette, IconShadow, IconTypography, IconWindmill } from '@tabler/icons-react';
import { MenuItem } from './models';
// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};
// ==============================|| UTILITIES MENU ITEMS ||============================== //
const utilities: MenuItem = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'Typography',
      type: 'item',
      url: '/utils/util-typography',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
      id: 'util-color',
      title: 'Color',
      type: 'item',
      url: '/utils/util-color',
      icon: icons.IconPalette,
      breadcrumbs: false
    },
    {
      id: 'util-shadow',
      title: 'Shadow',
      type: 'item',
      url: '/utils/util-shadow',
      icon: icons.IconShadow,
      breadcrumbs: false
    }
  ]
};
export default utilities;
