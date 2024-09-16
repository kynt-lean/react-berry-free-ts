import { IconKey } from '@tabler/icons-react';
import { MenuItem } from '../../menu/models';

export const authMenu: MenuItem = {
  id: 'auth',
  title: 'Auth Pages',
  caption: 'Auth Pages Caption',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Authentication',
      type: 'collapse',
      icon: IconKey,
      children: [
        {
          id: 'login',
          title: 'Login',
          type: 'item',
          url: '/auth/login',
          target: true
        },
        {
          id: 'register',
          title: 'Register',
          type: 'item',
          url: '/auth/register',
          target: true
        }
      ]
    }
  ]
};
