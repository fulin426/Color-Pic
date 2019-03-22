const initialState = {
  colors: [],
  status: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'ANALYZE_IMAGE':
      return {...state,
        colors: action.payload,
        status: 'recieved'
      };
    case 'CLEAR_RECIEVED':
      return {...state,
        status: action.status
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
