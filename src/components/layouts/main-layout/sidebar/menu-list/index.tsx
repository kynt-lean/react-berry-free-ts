import { Typography } from '@mui/material';
import { useMenuItems } from '../../../../../menu/store';
import { NavGroup } from './nav-group';

export const MenuList = () => {
  const menuItems = useMenuItems();
  const navItems = menuItems.map((item) => {
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
