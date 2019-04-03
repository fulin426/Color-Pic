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
        AddColor: `New Color Set "${action.payload}" Created`
      };
      case 'DELETE_COLORS':
        console.log(action.payload);
        console.log(state.Data.filter(item => item._id !== action.payload));
        return {
          ...state,
          Data: state.Data.filter(item => item._id !== action.payload),
          DeleteColor: `${action.payload} was Deleted`
        };
    default:
     return state;
  }
};
