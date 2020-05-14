import * as types from "./types";

export const fetchUserRequest = () => ({
  type: types.FETCH_USER_REQUEST
});

export const fetchUserSuccess = user => ({
  type: types.FETCH_USER_SUCCESS,
  payload: user
});

export const fetchUserFail = error => ({
  type: types.FETCH_USER_FAIL,
  payload: error
});

export const fetchUser = id => dispatch => {
  dispatch(fetchUserRequest());
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(userData => dispatch(fetchUserSuccess(userData)))
    .catch(error => dispatch(fetchUserFail(error)));
};

export const fetchUserPostsRequest = () => ({
  type: types.FETCH_USER_POSTS_REQUEST
});
//posts

export const fetchUserPostsSuccess = postsData => ({
  type: types.FETCH_USER_POSTS_SUCCESS,
  payload: postsData
});

export const fetchUserPostsFail = error => ({
  type: types.FETCH_USER_POSTS_FAIL,
  payload: error
});

export const fetchUserPosts = id => dispatch => {
  dispatch(fetchUserPostsRequest());
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then(response => response.json())
    .then(posts => dispatch(fetchUserPostsSuccess(posts)))
    .catch(error => dispatch(fetchUserPostsFail(error)));
};
