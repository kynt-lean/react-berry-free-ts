import { combineReducers } from 'redux';
import configReducer from './configReducer';

export type RootState = ReturnType<typeof reducer>;

const reducer = combineReducers({
  config: configReducer
});

export default reducer;
