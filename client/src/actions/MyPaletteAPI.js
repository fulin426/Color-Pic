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
        payload: res.data.title
      })
    )
    .catch(error =>
      console.log(error)
    );
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
