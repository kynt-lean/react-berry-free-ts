import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { MenuItem } from '../../../../../menu/models';
import { BerryTheme } from '../../../../../themes/model';
import { NavCollapse } from './nav-collapse';
import { NavItem } from './nav-item';

export const NavGroup = ({ item }: { item: MenuItem }) => {
  const theme = useTheme<BerryTheme>();
  const sortedChildren = item.children?.slice().sort((a, b) => a.order - b.order);
  const items = sortedChildren?.map(menu => {
    switch (menu.type) {
      case 'collapse':
        return <NavCollapse key={menu.id} menu={menu} level={1} />;
      case 'item':
        return <NavItem key={menu.id} item={menu} level={1} />;
      default:
        return (
          <Typography key={menu.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return (
    <>
      <List
        subheader={
          item.title && (
            <Typography variant="caption" sx={{ ...theme.typography.menuCaption }} display="block" gutterBottom>
              {item.title}
              {item.caption && (
                <Typography variant="caption" sx={{ ...theme.typography.subMenuCaption }} display="block" gutterBottom>
                  {item.caption}
                </Typography>
              )}
            </Typography>
          )
        }
      >
        {items}
      </List>

      {/* group divider */}
      <Divider sx={{ mt: 0.25, mb: 1.25 }} />
    </>
  );
};
