import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { PostItem } from "../components/PostItem";
import { Pagination } from "../components/Pagination";
import { PostForm } from "../components/PostForm";
import { PostsFilters } from "../components/PostsFilters";
import { Loader } from "../components/Loader";

export const Posts = ({
  posts,
  isLoading,
  error,
  addPost,
  addPostToFavorites,
  removePostFromFavorites,
  favoritePosts,
  isShowFavorites,
  searchWord
}) => {
  let maxItemsPerPage = 10;
  let maxItems = posts.length;
  let [currentPage, setCurrentPage] = useState(0);

  const handleSetCurrentPage = index => {
    setCurrentPage(index);
  };

  const PostItemObj = post => (
    <PostItem
      post={post}
      addToFavorites={addPostToFavorites}
      removeFromFavorites={removePostFromFavorites}
      key={post.id}
      favoritePosts={favoritePosts}
    />
  );

  let postsToRender = isShowFavorites
    ? posts.filter(post => favoritePosts.includes(post.id))
    : posts;

  let searchedPosts = postsToRender.filter(post =>
    post.title.match(searchWord)
  );

  let paginatedPosts = searchedPosts.slice(
    currentPage * maxItemsPerPage,
    (currentPage + 1) * maxItemsPerPage
  );

  if (paginatedPosts.length === 0) {
    maxItems = 0;
  }

  useEffect(() => {
    if (searchWord !== "" || isShowFavorites) {
      setCurrentPage(0);
    }
  }, [searchWord, isShowFavorites]);

  let postsRender = post => {
    maxItems = searchedPosts.length;
    return PostItemObj(post);
  };

  return (
    <div className="container mt-4">
      <PostForm addPost={addPost} isLoading={isLoading} />
      <PostsFilters isShowFavorites={isShowFavorites} searchWord={searchWord} />
      <Loader isLoading={isLoading} />
      {error && <span className="alert-danger">{error}</span>}
      <div className="list-group">
        {paginatedPosts.map(post => {
          return postsRender(post);
        })}
      </div>
      <Pagination
        currentPage={currentPage}
        maxItemsPerPage={maxItemsPerPage}
        maxItems={maxItems}
        setCurrentPage={handleSetCurrentPage}
      />
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.object,
  addPost: PropTypes.func.isRequired,
  addPostToFavorites: PropTypes.func.isRequired,
  favoritePosts: PropTypes.array,
  isShowFavorites: PropTypes.bool,
  searchWord: PropTypes.string
};
