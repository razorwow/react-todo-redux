import React from "react";
import store from "../store";
import { showAll, showFavorites } from "../store/posts/actions";
import { searchPosts } from "../store/posts/actions";

export const PostsFilters = ({ isShowFavorites, searchWord }) => {
  const handleFavoriteChange = e => {
    if (e.target.checked === true) {
      store.dispatch(showFavorites());
    } else {
      store.dispatch(showAll());
    }
  };

  const handleSearchChange = e => {
    store.dispatch(searchPosts(e.target.value));
  };
  return (
    <div className="mt-4 mb-4 d-flex justify-content-between align-items-center">
      <div className="ml-4">
        <input
          type="checkbox"
          className="form-check-input"
          id="showFavorites"
          checked={isShowFavorites}
          onChange={e => handleFavoriteChange(e)}
        />
        <label className="form-check-label" htmlFor="showFavorites">
          Show only favorites
        </label>
      </div>
      <div className="input-group w-25 float-right">
        <input
          type="text"
          className="form-control"
          placeholder="Search posts..."
          value={searchWord}
          onChange={e => handleSearchChange(e)}
        />
      </div>
    </div>
  );
};
