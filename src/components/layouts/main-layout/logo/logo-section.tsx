import ButtonBase from '@mui/material/ButtonBase';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MENU_OPEN } from '../../../../store/actions';
import { RootState } from '../../../../store/reducer';
import { Logo } from '../../../ui/logo';

export const LogoSection = () => {
  const defaultPath = useSelector<RootState, string>((state) => state.config.defaultPath);
  const defaultId = useSelector<RootState, string | undefined>((state) => state.menu.defaultId);
  const dispatch = useDispatch();
  return (
    <ButtonBase disableRipple onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })} component={Link} to={defaultPath}>
      <Logo />
    </ButtonBase>
  );
};
