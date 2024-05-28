// userActions.js
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});
