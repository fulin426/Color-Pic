import { hexToR } from "./convertRGB";
import { hexToG } from "./convertRGB";
import { hexToB } from "./convertRGB";

// Color info Actions
export const sendColorInfo = (hexColor, alpha) => dispatch => {
  let R = hexToR(hexColor);
  let G = hexToG(hexColor);
  let B = hexToB(hexColor);
  dispatch({
    type: "SEND_COLOR_INFO",
    hexColor: hexColor,
    R: R,
    G: G,
    B: B,
    alpha: alpha
  });
};

export const clearRecieved = () => dispatch => {
  dispatch({
    type: "CLEAR_RECIEVED",
    status: ""
  });
};

export const sendPositionInfo = position => dispatch => {
  dispatch({
    type: "SEND_POSITION_INFO",
    position: position
  });
};

export const clearPosition = () => dispatch => {
  dispatch({
    type: "CLEAR_POSITION_INFO",
    position: 0
  });
};

export const sendSelectedColor = color => dispatch => {
  dispatch({
    type: "SELECTED_COLOR",
    selectedColor: color
  });
};

export const sendAlphaInfo = alpha => dispatch => {
  dispatch({
    type: "SEND_ALPHA_INFO",
    alpha: alpha
  });
};

export const updateHexColor = newColorSet => dispatch => {
  dispatch({
    type: "UPDATE_HEX_COLOR",
    newColorSet: newColorSet
  });
};
