import ButtonBase from '@mui/material/ButtonBase';
import { Link } from 'react-router-dom';
import { useDefaultPath } from '../../../../config/store';
import { useOpenMenuId } from '../../../../menu/action';
import { useMenuDefaultId } from '../../../../menu/hook';
import { Logo } from '../../../ui/logo';

export const LogoSection = () => {
  const defaultPath = useDefaultPath();
  const defaultId = useMenuDefaultId();
  const { openMenuId } = useOpenMenuId();
  return (
    <ButtonBase disableRipple onClick={() => (defaultId ? openMenuId(defaultId) : {})} component={Link} to={defaultPath}>
      <Logo />
    </ButtonBase>
  );
};
