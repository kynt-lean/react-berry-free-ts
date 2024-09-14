import { combineReducers } from 'redux';
import { configReducer } from './config-reducer';
import { customizationReducer } from './customization-reducer';
import { menuReducer } from './menu-reducer';

export type RootState = ReturnType<typeof reducer>;

export const reducer = combineReducers({
  config: configReducer,
  menu: menuReducer,
  customization: customizationReducer
});
