import { BerryThemeCustomization } from './themes/theme';

export interface BerryAppConfiguration extends BerryThemeCustomization {
  defaultPath?: string;
  isOpen?: string[];
  id?: string;
  defaultId?: string;
  opened?: boolean;
  type?: string;
}

const config: BerryAppConfiguration = {
  defaultPath: '/dashboard/default',
  fontFamily: `'Poppins', sans-serif`,
  borderRadius: 12
};

export default config;
