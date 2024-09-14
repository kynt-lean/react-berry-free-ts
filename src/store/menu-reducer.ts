import { menuItems } from '../menu';
import { MenuState } from '../menu/models';
import { MENU_OPEN, MenuAction, SET_MENU } from './actions';

const initialState: MenuState = {
  opened: true,
  isOpen: [],
  defaultId: 'default',
  items: menuItems
};

export const menuReducer = (state = initialState, action: MenuAction): MenuState => {
  let id;
  switch (action.type) {
    case MENU_OPEN:
      id = action.id;
      return {
        ...state,
        isOpen: [id]
      };
    case SET_MENU:
      return {
        ...state,
        opened: action.opened
      };
    default:
      return state;
  }
};
