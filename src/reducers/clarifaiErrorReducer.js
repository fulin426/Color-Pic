export default (state = [], action) => {
  switch(action.type) {
    case 'ANALYZE_IMAGE_ERROR':
      return action.error
    default:
     return state;
  }
};
