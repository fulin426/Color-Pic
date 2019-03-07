const initialState = {
  url: 'https://cdn-images-1.medium.com/max/1000/1*PjLIvhVpVh26HXKyIc02lg.jpeg'
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'MAIN_IMAGE':
     return action.payload;
    default:
     return state;
  }
};
