const initialState = {
  colors: [],
  status: '',
  error: false,
  errorData: '',
  open: false,
  loader: 'hide',
  image: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'ANALYZE_IMAGE':
      return {...state,
        colors: action.payload,
        status: action.status,
        // only close modal once success payload is recieved
        open: action.open,
        // clear error message if success
        error: action.error,
        loader: action.loader
      };
    case 'CLARIFAI_REQUEST_WAITING':
      return {...state,
        loader: 'show'
      };
    case 'CLEAR_RECIEVED':
      return {...state,
        status: action.status,
      };
    case 'CLEAR_COLORS':
      return {...state,
        colors: action.colors
      };
    case 'NEW_IMAGE_SUBMIT':
      return {...state,
        image: 'new'
      };
    case 'CLEAR_IMAGE_SUBMIT':
      return {...state,
        image: ''
      };
    case 'SEND_ERROR':
      return {...state,
        error: true
      }
    case 'CLEAR_ERROR':
      return {...state,
        error: false
      }
    case 'ANALYZE_IMAGE_ERROR':
      return {...state,
        errorData: action.errorData,
        error: action.error,
        loader: action.loader,
        // keep modal open if error
        open: action.open
      };
    case 'OPEN_IMAGE_MODAL':
      return {...state,
        open: true,
        error: false
      };
    case 'CLOSE_IMAGE_MODAL':
      return {...state,
        open: false,
        error: false,
      };
    case 'UPDATE_HEX_COLOR':
      function updateObjectInArray(array, action) {
        return array.map((item, index) => {
          if (index !== action.index) {
            // This isn't the item we care about - keep it as-is
            return item
          }
          // Otherwise, this is the one we want - return an updated value
          return {
            ...item,
            ...action.item
          }
        })
      }
      return {...state,
          colors: updateObjectInArray(state.colors, action.newColorSet)
        };
    default:
     return state;
  }
};
