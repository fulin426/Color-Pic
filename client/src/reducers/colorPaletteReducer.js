const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GET_COLORS':
     return {
       ...state,
       palletteData: action.payload
     };
    default:
     return state;
  }
};
