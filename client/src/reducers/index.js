import { combineReducers } from 'redux';
import clarifaiReducer from './clarifaiReducer';
import imageUrlReducer from './imageUrlReducer';
import colorInfoReducer from './colorInfoReducer';
import colorPaletteReducer from './colorPaletteReducer';

export default combineReducers({
  colors: clarifaiReducer,
  url: imageUrlReducer,
  colorInfo: colorInfoReducer,
  myPalettes: colorPaletteReducer
});
