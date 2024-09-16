import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Outlet } from 'react-router-dom';
import { AuthFooter } from './footer';

export const AuthLayout = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}
  >
    <Box sx={{ flexGrow: 1 }}>
      <Outlet />
    </Box>
    <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 1 }}>
      <AuthFooter />
    </Grid>
  </Box>
);
