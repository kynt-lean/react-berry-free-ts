import { IconDashboard } from '@tabler/icons-react';
import { MenuItem } from '../../menu/models';
import { dashboardPathPrefix } from './constants';

export const dashboardMenu: MenuItem = {
  id: 'dashboard',
  title: 'Dashboard',
  order: 1,
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      order: 1,
      type: 'item',
      url: `${dashboardPathPrefix}/default`,
      icon: IconDashboard,
      breadcrumbs: false
    }
  ]
};
