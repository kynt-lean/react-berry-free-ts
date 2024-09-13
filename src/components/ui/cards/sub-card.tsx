import Card, { CardTypeMap as MuiCardTypeMap } from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import Typography from '@mui/material/Typography';
import { forwardRef } from 'react';

type SubCardAdditionalProps = {
  content?: boolean;
  contentClass?: string;
  darkTitle?: boolean;
  secondary?: React.ReactNode;
  sx?: object;
  contentSX?: object;
};

export interface SubCardTypeMap<RootComponent extends React.ElementType = 'div'>
  extends MuiCardTypeMap<SubCardAdditionalProps, RootComponent> {}

export const SubCard = forwardRef(
  ({ children, content = true, contentClass, darkTitle, secondary, sx = {}, contentSX = {}, title, ...others }, ref) => {
    const defaultShadow = '0 2px 14px 0 rgb(32 40 45 / 8%)';
    return (
      <Card
        ref={ref}
        sx={{
          border: '1px solid',
          borderColor: 'divider',
          ':hover': { boxShadow: defaultShadow },
          ...sx
        }}
        {...others}
      >
        {!darkTitle && title && <CardHeader sx={{ p: 2.5 }} title={<Typography variant="h5">{title}</Typography>} action={secondary} />}
        {darkTitle && title && <CardHeader sx={{ p: 2.5 }} title={<Typography variant="h4">{title}</Typography>} action={secondary} />}

        {title && <Divider />}

        {content && (
          <CardContent sx={{ p: 2.5, ...contentSX }} className={contentClass || ''}>
            {children}
          </CardContent>
        )}
        {!content && children}
      </Card>
    );
  }
) as OverridableComponent<SubCardTypeMap>;
