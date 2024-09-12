import MuiAvatar, { AvatarTypeMap as MuiAvatarTypeMap } from '@mui/material/Avatar';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { forwardRef } from 'react';

interface AvatarAdditionalProps {
  color?: string;
  outline?: boolean;
  size?: string;
  sx?: object;
}

interface AvatarTypeMap<RootComponent extends React.ElementType = 'div'> extends MuiAvatarTypeMap<AvatarAdditionalProps, RootComponent> {}

const Avatar = forwardRef(({ color, outline, size, sx, ...others }, ref) => {
  const colorSX = color && !outline && { color: 'background.paper', bgcolor: `${color}.main` };
  const outlineSX = outline && {
    color: color ? `${color}.main` : `primary.main`,
    bgcolor: 'background.paper',
    border: '2px solid',
    borderColor: color ? `${color}.main` : `primary.main`
  };
  let sizeSX = {};
  switch (size) {
    case 'badge':
      sizeSX = { width: 28, height: 28 };
      break;
    case 'xs':
      sizeSX = { width: 34, height: 34 };
      break;
    case 'sm':
      sizeSX = { width: 40, height: 40 };
      break;
    case 'lg':
      sizeSX = { width: 72, height: 72 };
      break;
    case 'xl':
      sizeSX = { width: 82, height: 82 };
      break;
    case 'md':
      sizeSX = { width: 60, height: 60 };
      break;
    default:
      sizeSX = {};
  }
  return <MuiAvatar ref={ref} sx={{ ...colorSX, ...outlineSX, ...sizeSX, ...sx }} {...others} />;
}) as OverridableComponent<AvatarTypeMap>;

export default Avatar;
