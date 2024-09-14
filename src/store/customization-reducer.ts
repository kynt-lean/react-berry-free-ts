import { BerryThemeCustomization } from '../themes/theme';
import { CustomizationAction, SET_BORDER_RADIUS, SET_FONT_FAMILY } from './actions';

const initialState: BerryThemeCustomization = {
  fontFamily: `'Poppins', sans-serif`,
  borderRadius: 12
};

export const customizationReducer = (state = initialState, action: CustomizationAction): BerryThemeCustomization => {
  switch (action.type) {
    case SET_FONT_FAMILY:
      return {
        ...state,
        fontFamily: action.fontFamily
      };
    case SET_BORDER_RADIUS:
      return {
        ...state,
        borderRadius: action.borderRadius
      };
    default:
      return state;
  }
};
