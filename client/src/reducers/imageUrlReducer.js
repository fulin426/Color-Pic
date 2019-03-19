const initialState = {
  url: 'https://images.unsplash.com/photo-1552664622-2cdfdf76ed0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  exampleImages: [
    'https://images.unsplash.com/photo-1552664622-2cdfdf76ed0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1429497612798-1f189166a08a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1493804714600-6edb1cd93080?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
  ],
  random_url: ''
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
        url: action.url,
        random_url: action.url
      };
      case 'ADD_URL':
       return {
         ...state,
         exampleImages: state.exampleImages.concat(action.url)
       };
       // case 'REMOVE_IMG':
       //  return {
       //    ...state,
       //    exampleImages: state.exampleImages.concat(action.url)
       //  };
    default:
     return state;
  }
};
