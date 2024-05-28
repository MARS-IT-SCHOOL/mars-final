import { SET_THEME } from '../actions/themeActionTypes';

const initialState = {
  theme: "dark", // или любое значение по умолчанию
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export default themeReducer;
