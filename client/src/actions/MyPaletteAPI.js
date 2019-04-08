import axios from 'axios';
// Get user color palettes
export const getColors = () => dispatch => {
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
}

// Add color palettes
export const newColorPalette = (colorSet) => dispatch => {
  axios.post('/api/colors', colorSet)
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
  axios.put(`/api/colors/${id}`, colorSet)
    .then(res =>
      dispatch({
        type: 'UPDATE_COLORS',
        payload: colorSet
      })
    )
    .catch(error =>
      console.log(error)
    );
}

export const clearUpdateInStore = () => dispatch => {
  dispatch({
    type: 'CLEAR_UPDATE',
    update: ''
  })
}

// Delete user color palettes
export const deleteColorPalette = id => dispatch => {
  axios.delete(`/api/colors/${id}`)
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
