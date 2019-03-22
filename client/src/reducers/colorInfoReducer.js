const initialState = {
  hexColor: '',
  R: '',
  G: '',
  B: '',
  alpha: '',
  position: 0,
  selectedColor: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'SEND_COLOR_INFO':
      return {...state,
        hexColor: action.hexColor,
        R: action.R,
        G: action.G,
        B: action.B,
        alpha: action.alpha
      };
      case 'SEND_POSITION_INFO':
        return {...state,
          position: action.position
        };
      case 'CLEAR_POSITION_INFO':
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
