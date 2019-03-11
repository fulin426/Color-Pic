const initialState = {
  colorData: [],
  apiResponse: 'none',
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GET_COLOR_INFO':
      return {...state,
        colorData: action.payload,
        apiResponse: 'received'
      };
    default:
     return state;
  }
};
