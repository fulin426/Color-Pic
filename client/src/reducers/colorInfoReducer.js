const initialState = {
  hexColor: [],
  R: [],
  G: [],
  B: [],
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'SEND_COLOR_INFO':
      return {...state,
        hexColor: action.info[0],
        R: action.info[1],
        G: action.info[2],
        B: action.info[3]
      };
    default:
     return state;
  }
};
