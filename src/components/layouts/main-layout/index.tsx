import { CssBaseline, styled, useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { IconChevronRight } from '@tabler/icons-react';
import { Outlet } from 'react-router-dom';
import { setMenuOpened, useMenuOpened } from '../../../menu/store';
import { BerryTheme } from '../../../themes/model';
import { useDrawerWidth } from '../../../themes/store';
import { UICustomization } from '../../ui/customization';
import { Breadcrumbs } from '../../ui/mui-extensions/breadcrumbs';
import { Header } from './header';
import { Sidebar } from './sidebar';

const Main = styled('main', {
  shouldForwardProp: prop => prop !== 'open' && prop !== 'theme' && prop !== 'drawerWidth'
})(({ theme, open, drawerWidth }: { theme: BerryTheme; open: boolean; drawerWidth: number }) => ({
  ...theme.typography.mainContent,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  transition: theme.transitions.create(
    'margin',
    open
      ? {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen
        }
      : {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }
  ),
  [theme.breakpoints.up('md')]: {
    marginLeft: open ? 0 : -(drawerWidth - 20),
    width: `calc(100% - ${drawerWidth}px)`
  },
  [theme.breakpoints.down('md')]: {
    marginLeft: '20px',
    width: `calc(100% - ${drawerWidth}px)`,
    padding: '16px'
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: '10px',
    width: `calc(100% - ${drawerWidth}px)`,
    padding: '16px',
    marginRight: '10px'
  }
}));

export const MainLayout = () => {
  const theme = useTheme<BerryTheme>();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  const leftDrawerOpened = useMenuOpened();
  const drawerWidth = useDrawerWidth();
  const handleLeftDrawerToggle = () => setMenuOpened(!leftDrawerOpened);
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.default,
          transition: leftDrawerOpened ? theme.transitions.create('width') : 'none'
        }}
      >
        <Toolbar>
          <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
        </Toolbar>
      </AppBar>

      <Sidebar drawerOpen={!matchDownMd ? leftDrawerOpened : !leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />

      <Main theme={theme} open={leftDrawerOpened} drawerWidth={drawerWidth}>
        <Breadcrumbs separator={IconChevronRight} icon title rightAlign />
        <Outlet />
      </Main>

      <UICustomization />
    </Box>
  );
};
