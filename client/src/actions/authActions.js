import axios from 'axios';

// Check token & load user
export const loadUser = () => dispatch => {
  // User loading
  dispatch({ type: 'USER_LOADING'});
  
  axios
    .get('/api/auth/user', tokenConfig())
    .then(res =>
      dispatch({
        type: 'USER_LOADED',
        payload: res.data
      })
    )
    .catch(err => {
      dispatch({
        type: 'GET_ERRORS',
        payload: err.response
      });
      dispatch({
        type: 'AUTH_ERROR'
      });
    });
};

// Register User
export const registerUser = (email, password) => dispatch => {
  // Show loading bubble in user register
  dispatch({ type: 'USER_LOADING'});

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request body
  const body = JSON.stringify({ email, password });

  axios.post('/api/users', body, config)
    .then(res =>
      dispatch({
        type: 'REGISTER_SUCCESS',
        payload: res.data
      })
    )
    .catch(err => {
      console.log('register fail!')
      dispatch({
        type: 'GET_ERRORS',
        payload: err.response
      });
      dispatch({
        type: 'REGISTER_FAIL'
      });
    });
}

// Login User
export const loginUser = (email, password) => dispatch => {
  // Show loading bubble in login
  dispatch({ type: 'USER_LOADING'});

  // headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request body
  const body = JSON.stringify({ email, password});

  axios.post('/api/auth', body, config)
    .then(res =>
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: res.data
      })
    )
    .catch(err => {
      console.log('login fail!')
      dispatch({
        type: 'GET_ERRORS',
        payload: err.response
      });
      dispatch({
        type: 'LOGIN_FAIL'
      });
    });
}

// Logout User
export const logoutUser = () => {
  return {
    type: 'LOGOUT_SUCCESS'
  };
};

// Set up local storage for tokens
export const tokenConfig = () => {
  // Get token from localstorage
  const token = localStorage.getItem('token');

  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  };

  // If token, add to headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
};

// Modal Actions
export const openModal = () => {
  return {
    type: 'OPEN_MODAL'
  };
};

export const closeModal = () => {
  return {
    type: 'CLOSE_MODAL'
  };
};

// Logout User
export const clearErrors = () => {
  return {
    type: 'CLEAR_ERRORS'
  };
};
