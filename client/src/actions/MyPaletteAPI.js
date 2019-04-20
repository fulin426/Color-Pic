import axios from 'axios';
import { tokenConfig } from './authActions';

// Get user color palettes
export const getColors = (email) => dispatch => {
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
export const updateColorPalette = (id, colorSet) => dispatch => {
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
    .then(() => {
      // Make get call to retrieve new set
      axios.get('/api/colors')
        .then(res =>
          dispatch({
            type: 'GET_COLORS',
            payload: res.data
          })
        )
        .catch(error =>
          console.log(error)
        );
    })
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
