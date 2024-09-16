import ButtonBase from '@mui/material/ButtonBase';
import { Link } from 'react-router-dom';
import { useDefaultPath } from '../../../../config/selectors';
import { useOpenMenuId } from '../../../../menu/actions';
import { useMenuDefaultId } from '../../../../menu/selectors';
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
