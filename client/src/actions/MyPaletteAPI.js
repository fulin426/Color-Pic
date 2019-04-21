import axios from 'axios';
import { tokenConfig } from './authActions';

const callAPI = (email, dispatch) => {
  axios.get(`/api/colors/${email}`)
    .then(res =>
      dispatch({
        type: 'GET_COLORS',
        payload: res.data
      })
    )
    .catch(error =>
      console.log(error)
    );
}

// Get user color palettes
export const getColors = (email) => dispatch => {
  callAPI(email, dispatch);
}

// Add color palettes
export const newColorPalette = (colorSet) => dispatch => {
  axios.post('/api/colors', colorSet, tokenConfig())
    .then(res =>
      dispatch({
        type: 'ADD_COLORS',
        payload: res.data
      })
    )
    .catch(error =>
      console.log(error)
    );
}

// Update color palettes
export const updateColorPalette = (id, colorSet, email) => dispatch => {
  axios.put(`/api/colors/${id}`, colorSet, tokenConfig())
    .then(res =>
      dispatch({
        type: 'UPDATE_COLORS',
        payload: colorSet
      })
    )
    .catch(error => {
      console.log(error)
    })
    .then(() => { callAPI(email, dispatch) })
}

// Delete user color palettes
export const deleteColorPalette = (id) => dispatch => {
  axios.delete(`/api/colors/${id}`, tokenConfig())
    .then(res =>
      dispatch({
        type: 'DELETE_COLORS',
        payload: id
      })
    )
    .catch(error =>
      console.log(error)
    );
}

// Clear Colors
export const clearColors = () => {
  return {
    type: 'CLEAR_PALETTE_COLORS'
  };
}
