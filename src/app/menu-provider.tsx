import { authMenu } from '../features/auth/menu';
import { dashboardMenu } from '../features/dashboard/menu';
import { utilitiesMenu } from '../features/utilities/menu';
import { useSetMenuItems } from '../menu/actions';
import { sampleMenu } from './sample/menu';

export const AppMenuProvider = () => {
  const { setMenuItems } = useSetMenuItems();
  const menuItems = [dashboardMenu, authMenu, utilitiesMenu, sampleMenu];
  setMenuItems(menuItems);
  return <></>;
};
