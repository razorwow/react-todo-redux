import * as types from "./types";

const initialState = {
  users: [],
  error: null,
  isLoading: false
};

const handlers = {
  [types.FETCH_USERS_REQUEST]: state => ({
    ...state,
    isLoading: true
  }),
  [types.FETCH_USERS_SUCCESS]: (state, { payload }) => ({
    ...state,
    users: payload,
    isLoading: false
  }),
  [types.FETCH_USERS_FAIL]: (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  }),
  DEFAULT: state => state
};

export const usersReducer = (state = initialState, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};

export const getUsers = state => state.users;
export const getUsersLoading = state => state.isLoading;
