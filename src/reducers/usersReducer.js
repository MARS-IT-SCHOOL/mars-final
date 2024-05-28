// reducers/dataReducer.js
import { FETCH_DATA_SUCCESS } from '../actions/usersActions';

const userReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
