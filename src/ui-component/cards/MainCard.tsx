import Card, { CardTypeMap as MuiCardTypeMap } from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import Typography from '@mui/material/Typography';
import { forwardRef } from 'react';

const headerSX = {
  '& .MuiCardHeader-action': { mr: 0 }
};

type MainCardAdditionalProps = {
  border?: boolean;
  boxShadow?: boolean;
  content?: boolean;
  contentClass?: string;
  contentSX?: object;
  darkTitle?: boolean;
  secondary?: React.ReactNode;
  shadow?: string | number;
  sx?: object;
};

export interface MainCardTypeMap<RootComponent extends React.ElementType = 'div'>
  extends MuiCardTypeMap<MainCardAdditionalProps, RootComponent> {}

const MainCard = forwardRef(
  (
    {
      border = false,
      boxShadow,
      children,
      content = true,
      contentClass = '',
      contentSX = {},
      darkTitle,
      secondary,
      shadow,
      sx = {},
      title,
      ...others
    },
    ref
  ) => {
    return (
      <Card
        ref={ref}
        {...others}
        sx={{
          border: border ? '1px solid' : 'none',
          borderColor: 'divider',
          ':hover': {
            boxShadow: boxShadow ? shadow || '0 2px 14px 0 rgb(32 40 45 / 8%)' : 'inherit'
          },
          ...sx
        }}
      >
        {!darkTitle && title && <CardHeader sx={headerSX} title={title} action={secondary} />}
        {darkTitle && title && <CardHeader sx={headerSX} title={<Typography variant="h3">{title}</Typography>} action={secondary} />}

        {title && <Divider />}

        {content && (
          <CardContent sx={contentSX} className={contentClass}>
            {children}
          </CardContent>
        )}
        {!content && children}
      </Card>
    );
  }
) as OverridableComponent<MainCardTypeMap>;

export default MainCard;
