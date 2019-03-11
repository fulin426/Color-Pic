const initialState = {
  url: 'https://images.unsplash.com/photo-1529186338373-faa516eb4708?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
  exampleImages: [
    'https://images.unsplash.com/photo-1529186338373-faa516eb4708?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
    'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1534759926787-89fa60f35848?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1525122647714-4c39e72a6873?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80'
  ]
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'MAIN_IMAGE':
     return {
       ...state,
       url: action.url
     };
     case 'RANDOM_IMAGE':
      return {
        ...state,
        url: action.url
      };
      case 'ADD_URL':
       return {
         ...state,
         exampleImages: state.exampleImages.concat(action.url)
       };
    default:
     return state;
  }
};
