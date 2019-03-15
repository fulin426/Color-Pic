const initialState = {
  hexColor: [],
  R: [],
  G: [],
  B: [],
  alpha: [],
  position: 0,
  selectedColor: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'SEND_COLOR_INFO':
      console.log(action.info[0]);
      return {...state,
        hexColor: action.info[0],
        R: action.info[1],
        G: action.info[2],
        B: action.info[3]
      };
      case 'SEND_POSITION_INFO':
        return {...state,
          position: action.position
        };
      case 'SEND_ALPHA_INFO':
        return {...state,
          alpha: action.alpha
        };
      case 'SELECTED_COLOR':
        return {...state,
          selectedColor: action.selectedColor
        };
    default:
     return state;
  }
};
