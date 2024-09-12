import config, { BerryAppConfiguration } from '../config';
import * as actionTypes from './actions';

interface MenuOpenAction {
  type: typeof actionTypes.MENU_OPEN;
  id: string;
}

interface SetMenuAction {
  type: typeof actionTypes.SET_MENU;
  opened: boolean;
}

interface SetFontFamilyAction {
  type: typeof actionTypes.SET_FONT_FAMILY;
  fontFamily: string;
}

interface SetBorderRadiusAction {
  type: typeof actionTypes.SET_BORDER_RADIUS;
  borderRadius: number;
}

export type ConfigurationAction = MenuOpenAction | SetMenuAction | SetFontFamilyAction | SetBorderRadiusAction;

const initialState: BerryAppConfiguration = {
  isOpen: [],
  defaultId: 'default',
  fontFamily: config.fontFamily,
  borderRadius: config.borderRadius,
  opened: true
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //
const configReducer = (state = initialState, action: ConfigurationAction): BerryAppConfiguration => {
  let id;
  switch (action.type) {
    case actionTypes.MENU_OPEN:
      id = action.id;
      return {
        ...state,
        isOpen: [id]
      };
    case actionTypes.SET_MENU:
      return {
        ...state,
        opened: action.opened
      };
    case actionTypes.SET_FONT_FAMILY:
      return {
        ...state,
        fontFamily: action.fontFamily
      };
    case actionTypes.SET_BORDER_RADIUS:
      return {
        ...state,
        borderRadius: action.borderRadius
      };
    default:
      return state;
  }
};
export default configReducer;
