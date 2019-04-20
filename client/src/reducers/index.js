import { combineReducers } from 'redux';
import clarifaiReducer from './clarifaiReducer';
import imageUrlReducer from './imageUrlReducer';
import colorInfoReducer from './colorInfoReducer';
import colorPaletteReducer from './colorPaletteReducer';
import errorsReducer from './errorsReducer';
import authReducer from './authReducer';

export default combineReducers({
  colors: clarifaiReducer,
  url: imageUrlReducer,
  colorInfo: colorInfoReducer,
  myPalettes: colorPaletteReducer,
  errors: errorsReducer,
  auth: authReducer
});
