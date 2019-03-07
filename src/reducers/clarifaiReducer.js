export default (state = [], action) => {
  switch(action.type) {
    case 'ANALYZE_IMAGE':
     return action.payload;
    default:
     return state;
  }
};
