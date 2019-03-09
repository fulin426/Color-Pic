import axios from 'axios';

const Clarifai = require('clarifai');

export const analyzeImage = (url) => async dispatch => {
  const app = new Clarifai.App({apiKey: 'bd8644854b19417dacdfa3adba21aab1'});
  try {
    const response = await app.models.predict(Clarifai.COLOR_MODEL, url);
    dispatch({
      type: 'ANALYZE_IMAGE',
      payload: response.outputs[0].data.colors
    })
  } catch(err) {
    console.log(err);
    dispatch({
      type: 'ANALYZE_IMAGE_ERROR',
      error: err.data.status.details
    })
  }
};

export const changeMainImage = url => {
  return {
    type: 'MAIN_IMAGE',
    url: url
  };
};

export const randomImage = () => async dispatch => {
  const response = await axios.get('https://api.unsplash.com/photos/random', {
    headers: {
      Authorization: 'Client-ID 7e3664d943831b0902bdde147b893f182272b23dad6fcf084fb3eaa9d4b0b325'
    }
  });
  console.log(response.data.urls);
  dispatch({
    type: 'RANDOM_IMAGE',
    url: response.data.urls.regular
  })
};
