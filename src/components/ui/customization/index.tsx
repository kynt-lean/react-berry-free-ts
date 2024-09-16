import Drawer from '@mui/material/Drawer';
import Fab from '@mui/material/Fab';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Slider from '@mui/material/Slider';
import { useTheme } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { IconSettings } from '@tabler/icons-react';
import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useSetBorderRadius, useSetFontFamily } from '../../../themes/actions';
import { BerryTheme } from '../../../themes/model';
import { useCustomization, useGridSpacing } from '../../../themes/selectors';
import { SubCard } from '../cards/sub-card';
import { AnimateButton } from '../mui-extensions/animate-button';

function valueText(value: string | number) {
  return `${value}px`;
}

export const UICustomization = () => {
  const theme = useTheme<BerryTheme>();
  const gridSpacing = useGridSpacing();
  const customization = useCustomization();
  const { setBorderRadius } = useSetBorderRadius();
  const { setFontFamily } = useSetFontFamily();

  // drawer on/off
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);

  // state - border radius
  const handleBorderRadius = (event: Event, newValue: number | number[], activeThumb: number) => {
    setBorderRadius(Array.isArray(newValue) ? newValue[0] : newValue);
  };

  // state - font family
  const handleFontFamily = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFontFamily(event.target.value);
  };

  return (
    <>
      <Tooltip title="Live Customize">
        <Fab
          component="div"
          onClick={handleToggle}
          size="medium"
          variant="circular"
          color="secondary"
          sx={{
            borderRadius: 0,
            borderTopLeftRadius: '50%',
            borderBottomLeftRadius: '50%',
            borderTopRightRadius: '50%',
            borderBottomRightRadius: '4px',
            top: '25%',
            position: 'fixed',
            right: 10,
            zIndex: theme.zIndex.speedDial
          }}
        >
          <AnimateButton type="rotate">
            <IconButton color="inherit" size="large" disableRipple>
              <IconSettings />
            </IconButton>
          </AnimateButton>
        </Fab>
      </Tooltip>

      <Drawer
        anchor="right"
        onClose={handleToggle}
        open={open}
        PaperProps={{
          sx: {
            width: 280
          }
        }}
      >
        <PerfectScrollbar component="div">
          <Grid container spacing={gridSpacing} sx={{ p: 3 }}>
            <Grid item xs={12}>
              <SubCard title="Font Family">
                <FormControl>
                  <RadioGroup
                    aria-label="font-family"
                    value={customization.fontFamily}
                    onChange={handleFontFamily}
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="'Roboto', sans-serif"
                      control={<Radio />}
                      label="Roboto"
                      sx={{
                        '& .MuiSvgIcon-root': { fontSize: 28 },
                        '& .MuiFormControlLabel-label': {
                          color: theme.palette.grey[900]
                        }
                      }}
                    />
                    <FormControlLabel
                      value="'Poppins', sans-serif"
                      control={<Radio />}
                      label="Poppins"
                      sx={{
                        '& .MuiSvgIcon-root': { fontSize: 28 },
                        '& .MuiFormControlLabel-label': {
                          color: theme.palette.grey[900]
                        }
                      }}
                    />
                    <FormControlLabel
                      value="'Inter', sans-serif"
                      control={<Radio />}
                      label="Inter"
                      sx={{
                        '& .MuiSvgIcon-root': { fontSize: 28 },
                        '& .MuiFormControlLabel-label': {
                          color: theme.palette.grey[900]
                        }
                      }}
                    />
                  </RadioGroup>
                </FormControl>
              </SubCard>
            </Grid>
            <Grid item xs={12}>
              <SubCard title="Border Radius">
                <Grid item xs={12} container spacing={2} alignItems="center" sx={{ mt: 2.5 }}>
                  <Grid item>
                    <Typography variant="h6" color="secondary">
                      4px
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Slider
                      size="small"
                      value={customization.borderRadius as number}
                      onChange={handleBorderRadius}
                      getAriaValueText={valueText}
                      valueLabelDisplay="on"
                      aria-labelledby="discrete-slider-small-steps"
                      marks
                      step={2}
                      min={4}
                      max={24}
                      color="secondary"
                      sx={{
                        '& .MuiSlider-valueLabel': {
                          color: 'secondary.light'
                        }
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" color="secondary">
                      24px
                    </Typography>
                  </Grid>
                </Grid>
              </SubCard>
            </Grid>
          </Grid>
        </PerfectScrollbar>
      </Drawer>
    </>
  );
};
