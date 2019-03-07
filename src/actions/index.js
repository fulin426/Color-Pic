const Clarifai = require('clarifai');

export const analyzeImage = (url) => async dispatch => {
  const app = new Clarifai.App({apiKey: 'bd8644854b19417dacdfa3adba21aab1'});
  const response = await app.models.predict(Clarifai.COLOR_MODEL, url);
  dispatch({
    type: 'ANALYZE_IMAGE',
    payload: response.outputs[0].data.colors
  })
};

export const changeMainImage = url => {
  return {
    type: 'MAIN_IMAGE',
    url: url
  };
};
