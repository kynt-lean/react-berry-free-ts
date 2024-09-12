import Box from '@mui/material/Box';
import { ReactNode } from 'react';
import MainCard, { MainCardTypeMap } from '../../ui-component/cards/MainCard';

const AuthCardWrapper: React.FC<{ children: ReactNode } & MainCardTypeMap['props']> = ({ children, ...other }) => (
  <MainCard
    sx={{
      maxWidth: { xs: 400, lg: 475 },
      margin: { xs: 2.5, md: 3 },
      '& > *': {
        flexGrow: 1,
        flexBasis: '50%'
      }
    }}
    content={false}
    {...other}
  >
    <Box sx={{ p: { xs: 2, sm: 3, xl: 5 } }}>{children}</Box>
  </MainCard>
);
export default AuthCardWrapper;
