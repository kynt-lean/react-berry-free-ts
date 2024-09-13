import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import { useTheme } from '@mui/material/styles';
import { IconMenu2 } from '@tabler/icons-react';
import { BerryTheme } from '../../../../themes/theme';
import { LogoSection } from '../logo-section';
import { NotificationSection } from './notification-section';
import { ProfileSection } from './profile-section';
import { SearchSection } from './search-section';

export type HeaderProps = {
  handleLeftDrawerToggle?: (...args: any[]) => any;
};

export const Header: React.FC<HeaderProps> = ({ handleLeftDrawerToggle }) => {
  const theme = useTheme<BerryTheme>();
  return (
    <>
      <Box
        sx={{
          width: 228,
          display: 'flex',
          [theme.breakpoints.down('md')]: {
            width: 'auto'
          }
        }}
      >
        <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
          <LogoSection />
        </Box>
        <ButtonBase sx={{ borderRadius: '8px', overflow: 'hidden' }}>
          <Avatar
            variant="rounded"
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              transition: 'all .2s ease-in-out',
              background: theme.palette.secondary.light,
              color: theme.palette.secondary.dark,
              '&:hover': {
                background: theme.palette.secondary.dark,
                color: theme.palette.secondary.light
              }
            }}
            onClick={handleLeftDrawerToggle}
            color="inherit"
          >
            <IconMenu2 stroke={1.5} size="1.3rem" />
          </Avatar>
        </ButtonBase>
      </Box>

      <SearchSection />
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />

      <NotificationSection />
      <ProfileSection />
    </>
  );
};
