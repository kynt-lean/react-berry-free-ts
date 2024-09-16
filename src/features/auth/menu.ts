import { IconKey } from '@tabler/icons-react';
import { MenuItem } from '../../menu/models';
import { authPathPrefix } from './constants';

export const authMenu: MenuItem = {
  id: 'auth',
  title: 'Auth Pages',
  caption: 'Auth Pages Caption',
  order: 2,
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Authentication',
      order: 1,
      type: 'collapse',
      icon: IconKey,
      children: [
        {
          id: 'login',
          title: 'Login',
          order: 1,
          type: 'item',
          url: `${authPathPrefix}/login`
        },
        {
          id: 'register',
          title: 'Register',
          order: 2,
          type: 'item',
          url: `${authPathPrefix}/register`
        }
      ]
    }
  ]
};
