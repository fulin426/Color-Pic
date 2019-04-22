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

// Califai API Call
export const analyzeImage = (url) => dispatch => {
  // Show loading screen
  dispatch({ type: 'CLARIFAI_REQUEST_WAITING' });

  app.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", url)
  .then(res => {
    const hexColors = [];
    // Create new array of hexcolors from response data
    res.outputs[0].data.colors.map(color => {
      return hexColors.push(color.raw_hex.slice(1, color.raw_hex.length));
    });
    // send hexcolor data as data query to back end
    fetch('/api/colormind?colors=' + hexColors)
      .then(res => res.json())
      .then(res => {
        let RGBtoHexData = [];
        let colorMindResponse = res;
        // create new array from response data with color palette and default alpha = 1
        for (let i = 0; i < colorMindResponse.length; i++) {
          RGBtoHexData.push({
            hexColor: rgbToHex(colorMindResponse[i][0], colorMindResponse[i][1], colorMindResponse[i][2]),
            alpha: 1
          });
        }
        dispatch({
          type: 'ANALYZE_IMAGE',
          payload: RGBtoHexData,
          status: 'recieved',
          error: false,
          open: false,
          loader: 'hide'
        });
      })
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: 'ANALYZE_IMAGE_ERROR',
        errorData: err.data.status.details,
        error: true,
        open: true,
        loader: 'hide'
    });
  })
};

// image modal Actions
export const openImgModal = () => {
  return ({
    type: 'OPEN_IMAGE_MODAL'
  });
}

export const closeImgModal = () => {
  return ({
    type: 'CLOSE_IMAGE_MODAL',
  });
}

export const newImgSubmit = () => {
  return ({
    type: 'NEW_IMAGE_SUBMIT'
  });
}

export const showModalLoader = () => {
  return ({
    type: 'CLARIFAI_REQUEST_WAITING'
  });
}

export const clearImgSubmit = () => {
  return ({
    type: 'CLEAR_IMAGE_SUBMIT'
  });
}

export const sendErrorStatus = () => {
  return ({
    type: 'SEND_ERROR'
  });
}

export const clearErrorStatus = () => {
  return ({
    type: 'CLEAR_ERROR'
  });
}

// Color info Actions
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
}


export const sendPositionInfo = (position) => dispatch => {
  dispatch({
    type: 'SEND_POSITION_INFO',
    position: position
  })
}

export const clearPosition = () => dispatch => {
  dispatch({
    type: 'CLEAR_POSITION_INFO',
    position: 0
  })
}

export const sendSelectedColor = (color) => dispatch => {
  dispatch({
    type: 'SELECTED_COLOR',
    selectedColor: color
  })
}

export const sendAlphaInfo = (alpha) => dispatch => {
  dispatch({
    type: 'SEND_ALPHA_INFO',
    alpha: alpha
  })
}

export const updateHexColor = (newColorSet) => dispatch => {
  dispatch({
    type: 'UPDATE_HEX_COLOR',
    newColorSet: newColorSet
  })
}

// image submit actions
export const changeMainImage = url => {
  return {
    type: 'MAIN_IMAGE',
    url: url
  };
}

export const addImageSelection = url => {
  return {
    type: 'ADD_URL',
    url: url
  };
}

export const deleteURL = (url) => dispatch => {
  dispatch({
    type: 'DELETE_URL',
    url: url
  })
}
