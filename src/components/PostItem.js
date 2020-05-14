import React from "react";
import PropTypes from "prop-types";

export const PostItem = ({
  post,
  addToFavorites,
  favoritePosts,
  removeFromFavorites
}) => {
  const handleClick = id => {
    if (favoritePosts.includes(id)) {
      removeFromFavorites(id);
    } else {
      addToFavorites(id);
    }
  };
  return (
    <div className="list-group-item">
      <div className="h2 d-flex justify-content-between">
        <span>{post.title}</span>{" "}
        <button
          onClick={() => handleClick(post.id)}
          className="btn btn-primary flex-shrink-0"
        >
          {favoritePosts.includes(post.id)
            ? "remove from favorites"
            : "add to favorites"}
        </button>
      </div>
      <p>{post.body}</p>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object
};
