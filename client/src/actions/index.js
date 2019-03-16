import axios from 'axios';
const Clarifai = require('clarifai');
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

export const analyzeImage = (url) => async dispatch => {
  const app = new Clarifai.App({apiKey: 'bd8644854b19417dacdfa3adba21aab1'});
    app.models.predict(Clarifai.COLOR_MODEL, url)
    .then(response => {
      //convert Hexcolors from Clarifai API to send to Colormind API
      const hexColors = [];
      response.outputs[0].data.colors.map(color => {
        return hexColors.push(color.raw_hex);
      });

      let hexToRGB = [];
      for (let i = 0; i < hexColors.length; i++) {
        let R = hexToR(hexColors[i]);
        let G = hexToG(hexColors[i]);
        let B = hexToB(hexColors[i]);
        hexToRGB.push([ R, G , B ]);
      };

      if( hexToRGB.length > 5 ) {
        hexToRGB = hexToRGB.slice(1, 6);
      };

      if (hexToRGB.length < 5) {
        for (let i = hexToRGB.length; i < 5 ; i++) {
          hexToRGB.push('N');
        }
      }
      //2nd call to colormind API
      axios.post('http://colormind.io/api/', {
        model : "default",
        input : hexToRGB
      })
      .then(function (response) {
        let RGBtoHexData = [];
        let colorMindResponse = response.data.result;
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

//finish error handling in reducer
export const randomImage = () => async dispatch => {
  try {
    const response = await axios.get('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID 7e3664d943831b0902bdde147b893f182272b23dad6fcf084fb3eaa9d4b0b325'
      }
    });
    dispatch({
      type: 'RANDOM_IMAGE',
      url: response.data.urls.regular
    })
  } catch(err) {
    console.log(err);
    dispatch({
      type: 'RANDOM_IMAGE_ERROR',
      error: err
    })
  }
};
//add error handling
export const sendColorInfo = (hexColor) => dispatch => {

  let R = hexToR(hexColor);
  let G = hexToG(hexColor);
  let B = hexToB(hexColor);
  dispatch({
    type: 'SEND_COLOR_INFO',
    info: [hexColor, R, G, B],
  })
};

export const sendPositionInfo = (position) => dispatch => {
  dispatch({
    type: 'SEND_POSITION_INFO',
    position: position
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

export const colorMindAPI = () => dispatch => {
  return fetch('/api/customers')
    .then(res => res.json())
    .then(customers => {
      // console.log(customers);
      dispatch({
        type: 'GET_CUSTOMERS',
        payload: customers
      })
    }
  )
}
