import { Outlet } from 'react-router-dom';
import { UICustomization } from '../../ui/customization';

export const AuthLayout = () => (
  <>
    <Outlet />
    <UICustomization />
  </>
);
