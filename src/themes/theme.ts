import { Palette, PaletteColor, PaletteColorOptions, PaletteOptions, Theme } from '@mui/material';
import { Typography, TypographyOptions, TypographyStyle, TypographyStyleOptions } from '@mui/material/styles/createTypography';
import { CSSProperties } from 'react';

export interface BerryTheme extends Theme {
  palette: BerryPalette;
  typography: BerryTypography;
}

export interface BerryThemeOptions {
  colors: CSSModuleClasses;
  heading: string;
  paper: string;
  backgroundDefault: string;
  background: string;
  darkTextPrimary: string;
  darkTextSecondary: string;
  textDark: string;
  menuSelected: string;
  menuSelectedBack: string;
  divider: string;
  customization: BerryThemeCustomization;
}

export interface BerryThemeCustomization extends CSSProperties {
  mode?: 'light' | 'dark';
  navType?: any;
}

export interface BerryPalette extends Palette {
  orange: PaletteColor;
  dark: PaletteColor;
  text: TypeText;
  primary: PaletteColor & { 200: string; 800: string };
  secondary: PaletteColor & { 200: string; 800: string };
  success: PaletteColor & { 200: string };
}

export interface BerryPaletteOptions extends PaletteOptions {
  orange?: PaletteColorOptions;
  dark?: PaletteColorOptions;
  text?: Partial<TypeText>;
}

interface TypeText {
  primary: string;
  secondary: string;
  disabled: string;
  dark: string;
  hint: string;
}

export interface BerryTypography extends Typography, Record<BerryVariant, TypographyStyle> {}

export interface BerryTypographyOptions extends TypographyOptions, Partial<Record<BerryVariant, TypographyStyleOptions>> {}

type BerryVariant =
  | 'customInput'
  | 'mainContent'
  | 'menuCaption'
  | 'subMenuCaption'
  | 'commonAvatar'
  | 'smallAvatar'
  | 'mediumAvatar'
  | 'largeAvatar';
