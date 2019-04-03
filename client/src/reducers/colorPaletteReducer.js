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
        Data: state.Data.concat(action.payload),
        AddColor: `"${action.payload.title}" Created ${action.payload._id}`
      };
      case 'DELETE_COLORS':
        return {
          ...state,
          Data: state.Data.filter(item => item._id !== action.payload),
          DeleteColor: `${action.payload} was Deleted`
        };
    default:
     return state;
  }
};
