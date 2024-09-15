import ButtonBase from '@mui/material/ButtonBase';
import { Link } from 'react-router-dom';
import { useDefaultPath } from '../../../../config/store';
import { openMenuId, useMenuDefaultId } from '../../../../menu/store';
import { Logo } from '../../../ui/logo';

export const LogoSection = () => {
  const defaultPath = useDefaultPath();
  const defaultId = useMenuDefaultId();
  return (
    <ButtonBase disableRipple onClick={() => (defaultId ? openMenuId(defaultId) : {})} component={Link} to={defaultPath}>
      <Logo />
    </ButtonBase>
  );
};
