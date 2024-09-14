import { authItems } from './auth';
import { dashboardItems } from './dashboard';
import { MenuItems } from './models';
import { otherItems } from './other';
import { utilitiesItems } from './utilities';

export const menuItems: MenuItems = [dashboardItems, authItems, utilitiesItems, otherItems];
