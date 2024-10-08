import { Typography } from '@mui/material';
import { useMenuItems } from '../../../../../menu/selectors';
import { NavGroup } from './nav-group';

export const MenuList = () => {
  const menuItems = useMenuItems();
  const sortedMenuItems = menuItems.slice().sort((a, b) => a.order - b.order);
  const navItems = sortedMenuItems.map(item => {
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
