import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import Slide from '@mui/material/Slide';
import Zoom from '@mui/material/Zoom';
import { BoxTypeMap } from '@mui/system';
import { forwardRef, ReactNode } from 'react';

type TransitionsAdditionalProps = {
  children: ReactNode;
  type?: 'grow' | 'fade' | 'collapse' | 'slide' | 'zoom';
  position?: 'top-left' | 'top-right' | 'top' | 'bottom-left' | 'bottom-right' | 'bottom';
  direction?: 'up' | 'down' | 'left' | 'right';
};

interface TransitionsTypeMap<RootComponent extends React.ElementType = 'div'>
  extends BoxTypeMap<TransitionsAdditionalProps, RootComponent> {}

const Transitions = forwardRef(({ children, position = 'top-left', type = 'grow', direction = 'up', ...others }, ref) => {
  let positionSX = {
    transformOrigin: '0 0 0'
  };
  switch (position) {
    case 'top-right':
      positionSX = {
        transformOrigin: 'top right'
      };
      break;
    case 'top':
      positionSX = {
        transformOrigin: 'top'
      };
      break;
    case 'bottom-left':
      positionSX = {
        transformOrigin: 'bottom left'
      };
      break;
    case 'bottom-right':
      positionSX = {
        transformOrigin: 'bottom right'
      };
      break;
    case 'bottom':
      positionSX = {
        transformOrigin: 'bottom'
      };
      break;
    case 'top-left':
    default:
      positionSX = {
        transformOrigin: '0 0 0'
      };
      break;
  }
  return (
    <Box ref={ref}>
      {type === 'grow' && (
        <Grow {...(others as any)}>
          <Box sx={positionSX}>{children}</Box>
        </Grow>
      )}
      {type === 'collapse' && (
        <Collapse {...(others as any)} sx={positionSX}>
          {children}
        </Collapse>
      )}
      {type === 'fade' && (
        <Fade
          {...(others as any)}
          timeout={{
            appear: 500,
            enter: 600,
            exit: 400
          }}
        >
          <Box sx={positionSX}>{children}</Box>
        </Fade>
      )}
      {type === 'slide' && (
        <Slide
          {...(others as any)}
          timeout={{
            appear: 0,
            enter: 400,
            exit: 200
          }}
          direction={direction}
        >
          <Box sx={positionSX}>{children}</Box>
        </Slide>
      )}
      {type === 'zoom' && (
        <Zoom {...(others as any)}>
          <Box sx={positionSX}>{children}</Box>
        </Zoom>
      )}
    </Box>
  );
}) as OverridableComponent<TransitionsTypeMap>;

export default Transitions;
