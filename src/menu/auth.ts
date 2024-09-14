import { IconKey } from '@tabler/icons-react';
import { MenuItem } from './models';

export const authItems: MenuItem = {
  id: 'pages',
  title: 'Pages',
  caption: 'Pages Caption',
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
