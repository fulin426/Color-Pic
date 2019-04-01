const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GET_COLORS':
     return {
       ...state,
       Data: action.payload
     };
     case 'ADD_COLORS':
      return {
        ...state,
        AddColor: `New Color Set "${action.payload}" Created`
      };
    default:
     return state;
  }
};
