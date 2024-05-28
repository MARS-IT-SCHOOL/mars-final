// authReducer.js
const initialState = {
  isAuthenticated: false,
  user: null, // User field to store user data
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload, // Save user data
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null, // Clear user data on logout
      };
    default:
      return state;
  }
};

export default authReducer;
