import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { MenuItems } from '../../../../../menu/models';
import { RootState } from '../../../../../store/reducer';
import { NavGroup } from './nav-group';

export const MenuList = () => {
  const menuItems = useSelector<RootState, MenuItems>((state) => state.menu.items);
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
