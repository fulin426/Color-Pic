import { combineReducers } from 'redux';
import clarifaiReducer from './clarifaiReducer';
import imageUrlReducer from './imageUrlReducer';

export default combineReducers({
  colors: clarifaiReducer,
  url: imageUrlReducer
});
