import { rgbToHex } from "./convertRGB";
const Clarifai = require("clarifai");
const clarifaiID = require("../config/keys").clarifaiID;
const app = new Clarifai.App({ apiKey: clarifaiID });

// Califai API Call
export const analyzeImage = url => dispatch => {
  // Show loading screen
  dispatch({ type: "CLARIFAI_REQUEST_WAITING" });

  app.models
    .predict("eeed0b6733a644cea07cf4c60f87ebb7", url)
    .then(res => {
      const hexColors = [];
      // Create new array of hexcolors from response data
      res.outputs[0].data.colors.map(color => {
        return hexColors.push(color.raw_hex.slice(1, color.raw_hex.length));
      });
      // send hexcolor data as data query to back end
      fetch("/api/colormind?colors=" + hexColors)
        .then(res => res.json())
        .then(res => {
          let RGBtoHexData = [];
          let colorMindResponse = res;
          // create new array from response data with color palette and default alpha = 1
          for (let i = 0; i < colorMindResponse.length; i++) {
            RGBtoHexData.push({
              hexColor: rgbToHex(
                colorMindResponse[i][0],
                colorMindResponse[i][1],
                colorMindResponse[i][2]
              ),
              alpha: 1
            });
          }
          dispatch({
            type: "ANALYZE_IMAGE",
            payload: RGBtoHexData,
            status: "recieved",
            error: false,
            open: false,
            loader: "hide"
          });
        });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: "ANALYZE_IMAGE_ERROR",
        errorData: err.data.status.details,
        error: true,
        open: true,
        loader: "hide"
      });
    });
};

// image modal Actions
export const openImgModal = () => {
  return {
    type: "OPEN_IMAGE_MODAL"
  };
};

export const closeImgModal = () => {
  return {
    type: "CLOSE_IMAGE_MODAL"
  };
};

export const newImgSubmit = () => {
  return {
    type: "NEW_IMAGE_SUBMIT"
  };
};

export const showModalLoader = () => {
  return {
    type: "CLARIFAI_REQUEST_WAITING"
  };
};

export const clearImgSubmit = () => {
  return {
    type: "CLEAR_IMAGE_SUBMIT"
  };
};

export const sendErrorStatus = () => {
  return {
    type: "SEND_ERROR"
  };
};

export const clearErrorStatus = () => {
  return {
    type: "CLEAR_ERROR"
  };
};

// image submit actions
export const changeMainImage = url => {
  return {
    type: "MAIN_IMAGE",
    url: url
  };
};

export const addImageSelection = url => {
  return {
    type: "ADD_URL",
    url: url
  };
};

export const deleteURL = url => dispatch => {
  dispatch({
    type: "DELETE_URL",
    url: url
  });
};
