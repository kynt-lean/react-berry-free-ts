import { IconDashboard } from '@tabler/icons-react';
import { MenuItem } from '../../menu/models';

export const dashboardMenu: MenuItem = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: IconDashboard,
      breadcrumbs: false
    }
  ]
};
