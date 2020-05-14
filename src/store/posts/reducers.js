import * as types from "./types";

function actionsWithFavoritePosts(state, payload, action) {
  let favoritePosts = state.favoritePosts;
  if (action === "remove") {
    favoritePosts = favoritePosts.filter(id => id !== payload);
  } else {
    favoritePosts.push(payload);
  }
  localStorage.setItem("favoritePosts", JSON.stringify(favoritePosts));

  return favoritePosts;
}

const initialState = {
  posts: [],
  favoritePosts: JSON.parse(localStorage.getItem("favoritePosts")) || [],
  isLoading: false,
  error: null,
  isShowFavorites: JSON.parse(localStorage.getItem("isShowFavorites")) || false,
  searchWord: JSON.parse(localStorage.getItem("searchWord")) || ""
};

let handlers = {
  [types.FETCH_POSTS_REQUEST]: state => ({ ...state, isLoading: true }),
  [types.FETCH_POSTS_SUCCESS]: (state, { payload }) => ({
    ...state,
    posts: payload,
    isLoading: false
  }),
  [types.FETCH_POSTS_FAIL]: (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  }),
  //addPost
  [types.ADD_POST_REQUEST]: state => ({ ...state, isLoading: true }),
  [types.ADD_POST_SUCCESS]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    posts: [payload, ...state.posts]
  }),
  [types.ADD_POST_FAIL]: (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  }),
  //favorites
  [types.ADD_POST_TO_FAVORITES]: (state, { payload }) => {
    let favoritePosts = actionsWithFavoritePosts(state, payload, "add");
    return {
      ...state,
      favoritePosts: [...favoritePosts]
    };
  },
  [types.REMOVE_POST_FROM_FAVORITES]: (state, { payload }) => {
    let favoritePosts = actionsWithFavoritePosts(state, payload, "remove");
    return {
      ...state,
      favoritePosts: [...favoritePosts]
    };
  },
  [types.SHOW_FAVORITES]: state => {
    localStorage.setItem("isShowFavorites", JSON.stringify(true));

    return {
      ...state,
      isShowFavorites: true
    };
  },
  [types.SHOW_ALL]: state => {
    localStorage.setItem("isShowFavorites", JSON.stringify(false));

    return {
      ...state,
      isShowFavorites: false
    };
  },
  [types.SEARCH_POSTS]: (state, { payload }) => {
    localStorage.setItem("searchWord", JSON.stringify(payload));
    return {
      ...state,
      searchWord: payload
    };
  },
  DEFAULT: state => state
};

export const postsReducer = (state = initialState, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};

export const getPosts = state => state.posts;
export const getPostsLoading = state => state.isLoading;
export const getPostsError = state => state.error;
export const getFavoritePosts = state => state.favoritePosts;
export const getFavoriteFilter = state => state.isShowFavorites;
export const getSearchWord = state => state.searchWord;
