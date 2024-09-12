import dashboard from './dashboard';
import { MenuItems } from './models';
import other from './other';
import pages from './pages';
import utilities from './utilities';

// ==============================|| MENU ITEMS ||============================== //
const menuItems: MenuItems = {
  items: [dashboard, pages, utilities, other]
};
export default menuItems;
