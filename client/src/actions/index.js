import axios from 'axios';
const Clarifai = require('clarifai');
const app = new Clarifai.App({apiKey: 'bd8644854b19417dacdfa3adba21aab1'});
//Convert Hex to RGB functions
function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)};
function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)};
function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)};
function cutHex(h) {return (h.charAt(0)==="#") ? h.substring(1,7):h};
// Convert RGB to Hex functions
function rgbToHex(R,G,B) {return "#"+toHex(R)+toHex(G)+toHex(B)};
function toHex(n) {
 n = parseInt(n,10);
 if (isNaN(n)) return "00";
 n = Math.max(0,Math.min(n,255));
 return "0123456789ABCDEF".charAt((n-n%16)/16)
      + "0123456789ABCDEF".charAt(n%16);
};

export const analyzeImage = (url) => dispatch => {
  app.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", url)
  .then(function(response) {
      const hexColors = [];
      response.outputs[0].data.colors.map(color => {
        return hexColors.push(color.raw_hex.slice(1, color.raw_hex.length));
      });
      fetch('/api/colormind?colors=' + hexColors)
        .then(res => res.json())
        .then(function (response) {
          let RGBtoHexData = [];
          let colorMindResponse = response;
          for (let i = 0; i < colorMindResponse.length; i++) {
            RGBtoHexData.push({
              hexColor: rgbToHex(colorMindResponse[i][0], colorMindResponse[i][1], colorMindResponse[i][2]),
              alpha: 1
            });
          }
        // console.log(RGBtoHexData);
        dispatch({
          type: 'ANALYZE_IMAGE',
          payload: RGBtoHexData
        });
      })
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: 'ANALYZE_IMAGE_ERROR',
        error: err.data.status.details
    });
  })
};

export const createNewPalette = () => dispatch => {

}

//add error handling
export const sendColorInfo = (hexColor, alpha) => dispatch => {

  let R = hexToR(hexColor);
  let G = hexToG(hexColor);
  let B = hexToB(hexColor);
  dispatch({
    type: 'SEND_COLOR_INFO',
    hexColor: hexColor,
    R: R,
    G: G,
    B: B,
    alpha: alpha
  })
}

export const clearRecieved = () => dispatch => {
  dispatch({
    type: 'CLEAR_RECIEVED',
    status: ''
  })
};


export const sendPositionInfo = (position) => dispatch => {
  dispatch({
    type: 'SEND_POSITION_INFO',
    position: position
  })
};

export const clearPosition = () => dispatch => {
  dispatch({
    type: 'CLEAR_POSITION_INFO',
    position: 0
  })
};

export const clearColorList = () => dispatch => {
  dispatch({
    type: 'CLEAR_COLORS',
    colors: []
  })
};

export const sendSelectedColor = (color) => dispatch => {
  dispatch({
    type: 'SELECTED_COLOR',
    selectedColor: color
  })
};
export const sendAlphaInfo = (alpha) => dispatch => {
  dispatch({
    type: 'SEND_ALPHA_INFO',
    alpha: alpha
  })
};

export const updateHexColor = (newColorSet) => dispatch => {
  dispatch({
    type: 'UPDATE_HEX_COLOR',
    newColorSet: newColorSet
  })
};

export const changeMainImage = url => {
  return {
    type: 'MAIN_IMAGE',
    url: url
  };
};

export const addImageSelection = url => {
  return {
    type: 'ADD_URL',
    url: url
  };
};
