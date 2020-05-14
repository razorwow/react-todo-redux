import * as types from "./types";

const initialState = {
  user: null,
  userPosts: null,
  isLoading: true,
  error: null
};

const handlers = {
  [types.FETCH_USER_REQUEST]: state => ({
    ...state,
    isLoading: true,
    user: null
  }),

  [types.FETCH_USER_SUCCESS]: (state, { payload }) => ({
    ...state,
    user: payload,
    isLoading: false
  }),

  [types.FETCH_USER_FAIL]: (state, { payload }) => ({
    ...state,
    error: payload
  }),
  [types.FETCH_USER_POSTS_REQUEST]: state => ({
    ...state,
    isLoading: true,
    userPosts: null
  }),
  [types.FETCH_USER_POSTS_SUCCESS]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    userPosts: payload
  }),

  [types.FETCH_USER_POSTS_FAIL]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    error: payload
  }),

  DEFAULT: state => state
};

export const userReducer = (state = initialState, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;

  return handle(state, action);
};

export const getUser = state => state.user;
export const getUserPosts = state => state.userPosts;
export const getUserLoading = state => state.isLoading;
