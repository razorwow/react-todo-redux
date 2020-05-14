import * as types from "./types";
const usersUrl = "https://jsonplaceholder.typicode.com/users";

export const fetchUsersRequest = () => ({
  type: types.FETCH_USERS_REQUEST
});

export const fetchUsersSuccess = users => ({
  type: types.FETCH_USERS_SUCCESS,
  payload: users
});

export const fetchUsersFail = error => ({
  type: types.FETCH_USERS_FAIL,
  error: error
});

export const fetchUsers = () => dispatch => {
  dispatch(fetchUsersRequest());

  fetch(usersUrl)
    .then(response => response.json())
    .then(users => dispatch(fetchUsersSuccess(users)))
    .catch(error => dispatch(fetchUsersFail(error)));
};
