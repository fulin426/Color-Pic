const initialState = {
  Data: [],
  AddColor: "",
  DeleteColor: "",
  UpdateColor: "",
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_COLORS":
      return {
        ...state,
        Data: action.payload,
        loading: false
      };
    case "ADD_COLORS":
      console.log(state);
      console.log(action.payload);
      return {
        ...state,
        Data: state.Data.concat(action.payload),
        AddColor: `"${action.payload.title}" Created ${action.payload._id}`
      };
    case "UPDATE_COLORS":
      return {
        ...state,
        UpdateColor: `${action.payload} is the new update`
      };
    case "DELETE_COLORS":
      return {
        ...state,
        Data: state.Data.filter(item => item._id !== action.payload),
        DeleteColor: `${action.payload} was Deleted`
      };
    case "COLORS_LOADING":
      return {
        ...state,
        loading: true
      };
    case "CLEAR_PALETTE_COLORS":
      return {
        ...state,
        Data: [],
        AddColor: "",
        DeleteColor: "",
        UpdateColor: ""
      };
    default:
      return state;
  }
};
