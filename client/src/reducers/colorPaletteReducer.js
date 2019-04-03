const initialState = {
  Data: [],
  AddColor: '',
  DeleteColor: ''
};

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
        AddColor: `New Color Set "${action.payload}" Created`,
        DeleteColor: ''
      };
      case 'DELETE_COLORS':
       return {
         ...state,
         DeleteColor: `${action.payload} was Deleted`,
         AddColor: ''
       };
    default:
     return state;
  }
};
