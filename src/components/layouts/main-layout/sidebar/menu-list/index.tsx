import { Typography } from '@mui/material';
import menuItems from '../../../../../menu';
import { NavGroup } from './nav-group';

export const MenuList = () => {
  const navItems = menuItems.items.map((item) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });
  return <>{navItems}</>;
};
