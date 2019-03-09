import { combineReducers } from 'redux';
import clarifaiReducer from './clarifaiReducer';
import clarifaiErrorReducer from './clarifaiErrorReducer';
import imageUrlReducer from './imageUrlReducer';

export default combineReducers({
  colors: clarifaiReducer,
  error: clarifaiErrorReducer,
  url: imageUrlReducer
});
