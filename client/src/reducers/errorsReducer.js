const initialState = {
  message: '',
  status: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GET_ERRORS':
      return {
        message: action.payload.data,
        status: action.payload.status,
        id: action.payload.id
      };
    case 'CLEAR_ERRORS':
      return {
        msg: '',
        status: null
      };
    default:
    return state;
  }
}
