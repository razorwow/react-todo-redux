import * as types from "./types";
const postsUrl = "https://jsonplaceholder.typicode.com/posts/";

export const fetchPostsRequest = () => ({
  type: types.FETCH_POSTS_REQUEST
});

export const fetchPostsSuccess = posts => ({
  type: types.FETCH_POSTS_SUCCESS,
  payload: posts
});

export const fetchPostsFail = error => ({
  type: types.FETCH_POSTS_FAIL,
  error
});

export const fetchPosts = () => dispatch => {
  dispatch(fetchPostsRequest());
  fetch(postsUrl)
    .then(response => response.json())
    .then(posts => {
      dispatch(fetchPostsSuccess(posts));
    })
    .catch(e => dispatch(fetchPostsFail(e)));
};

export const addPostRequest = () => ({
  type: types.ADD_POST_REQUEST
});

export const addPostSuccess = post => ({
  type: types.ADD_POST_SUCCESS,
  payload: post
});

export const addPostFail = error => ({
  type: types.ADD_POST_FAIL,
  error: error
});

export const addPost = data => dispatch => {
  dispatch(addPostRequest());
  fetch(postsUrl, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(post => dispatch(addPostSuccess(post)))
    .catch(error => addPostFail(error));
};

export const addPostToFavorites = id => ({
  type: types.ADD_POST_TO_FAVORITES,
  payload: id
});

export const removePostFromFavorites = id => ({
  type: types.REMOVE_POST_FROM_FAVORITES,
  payload: id
});

export const showFavorites = () => ({
  type: types.SHOW_FAVORITES
});

export const showAll = () => ({
  type: types.SHOW_ALL
});

export const searchPosts = word => ({
  type: types.SEARCH_POSTS,
  payload: word
});
