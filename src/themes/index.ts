import color from '@/assets/scss/_themes-vars.module.scss';
import { createTheme, ThemeOptions } from '@mui/material/styles';
import { overrideComponentStyle } from './component';
import { createThemePalette } from './palette';
import { BerryTheme, BerryThemeCustomization, BerryThemeOptions } from './theme';
import { createThemeTypography } from './typography';

export const createBerryTheme = (customization: BerryThemeCustomization): BerryTheme => {
  const themeOption: BerryThemeOptions = {
    colors: color,
    heading: color.grey900,
    paper: color.paper,
    backgroundDefault: color.paper,
    background: color.primaryLight,
    darkTextPrimary: color.grey700,
    darkTextSecondary: color.grey500,
    textDark: color.grey900,
    menuSelected: color.secondaryDark,
    menuSelectedBack: color.secondaryLight,
    divider: color.grey200,
    customization
  };
  const themeOptions: ThemeOptions = {
    direction: 'ltr',
    palette: createThemePalette(themeOption),
    mixins: {
      toolbar: {
        minHeight: '48px',
        padding: '16px',
        '@media (min-width: 600px)': {
          minHeight: '48px'
        }
      }
    },
    typography: createThemeTypography(themeOption)
  };
  const themes = createTheme(themeOptions) as BerryTheme;
  themes.components = overrideComponentStyle(themeOption);
  return themes;
};
