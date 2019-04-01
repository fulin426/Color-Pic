import { combineReducers } from 'redux';
import clarifaiReducer from './clarifaiReducer';
import clarifaiErrorReducer from './clarifaiErrorReducer';
import imageUrlReducer from './imageUrlReducer';
import colorInfoReducer from './colorInfoReducer';
import colorPaletteReducer from './colorPaletteReducer';

export default combineReducers({
  colors: clarifaiReducer,
  error: clarifaiErrorReducer,
  url: imageUrlReducer,
  colorInfo: colorInfoReducer,
  myPalettes: colorPaletteReducer
});
